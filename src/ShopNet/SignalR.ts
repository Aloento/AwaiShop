import { HubConnectionState } from "@microsoft/signalr";
import dayjs, { Dayjs } from "dayjs";
import { Subject } from "rxjs";
import { NotLoginError, NotTrueError } from "~/Helpers/Exceptions";
import type { Logger } from "~/Helpers/Logger";
import type { AdminNet } from "./Admin/AdminNet";
import { MSAL, Shared, type IConcurrency } from "./Database";
import type { ShopNet } from "./ShopNet";

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.1.0
 */
type INet = typeof ShopNet | typeof AdminNet;

/**
 * @author Aloento
 * @since 1.0.0
 * @version 1.0.0
 */
export abstract class SignalR {
  /**
   * @author Aloento
   * @since 1.0.0
   * @version 0.1.1
   */
  protected static async EnsureConnected(this: INet): Promise<void> {
    if (this.Hub.state === HubConnectionState.Connected)
      return Promise.resolve();

    if (this.Hub.state === HubConnectionState.Disconnected
      || this.Hub.state === HubConnectionState.Disconnecting)
      await this.Hub.start();

    return new Promise<void>(resolve => {
      const interval = setInterval(() => {
        if (this.Hub.state === HubConnectionState.Connected) {
          clearInterval(interval);
          resolve();
        }
      }, 100);
    });
  }

  /**
   * @author Aloento
   * @since 1.0.0
   * @version 0.1.0
   */
  protected static async Invoke<T>(this: INet, methodName: string, ...args: any[]): Promise<T> {
    await this.EnsureConnected();
    return this.Hub.invoke<T>(methodName, ...args);
  }

  /**
   * @author Aloento
   * @since 1.0.0
   * @version 0.2.1
   */
  protected static EnsureLogin(this: INet) {
    if (!MSAL.getActiveAccount())
      throw new NotLoginError();
  }

  /**
   * @author Aloento
   * @since 1.0.0
   * @version 0.1.0
   */
  protected static EnsureTrue(this: INet, res: boolean | null | undefined): asserts res is true {
    if (!res)
      throw new NotTrueError();
  }

  /**
   * @author Aloento
   * @since 1.3.0
   * @version 0.1.0
   */
  public static Index(key: string | number, methodName: string): string {
    return `${methodName}_${key}`;
  }

  /**
   * @author Aloento
   * @since 1.3.0
   * @version 0.1.0
   */
  protected static async UpdateCache<T>(
    this: INet, action: (raw: T) => T, key: string | number, methodName: string, exp?: Dayjs
  ) {
    const index = this.Index(key, methodName);
    const find = await Shared.Get<T & { QueryExp?: number }>(index);

    if (!find)
      return;

    const data = action(find);

    if (find.QueryExp)
      await Shared.Set<T & { QueryExp: number }>(index, {
        ...data,
        QueryExp: dayjs().add(1, "m").unix()
      }, null);
    else
      await Shared.Set<T>(index, data, exp || null);
  }

  /**
   * @author Aloento
   * @since 1.0.0
   * @version 0.3.1
   */
  protected static async GetVersionCache<T extends IConcurrency>(
    this: INet, key: string | number, methodName: string
  ): Promise<T> {
    const index = this.Index(key, methodName);
    const find = await Shared.Get<T & { QueryExp: number }>(index);

    if (find && find.QueryExp > dayjs().unix())
      return find;

    const res = await this.Invoke<T | true | null>(methodName, key, find?.Version);

    if (res === true) {
      Shared.Set<T & { QueryExp: number }>(index, {
        ...find!,
        QueryExp: dayjs().add(1, "m").unix()
      }, null);

      return find!;
    }

    if (!res) {
      Shared.Sto.delete(index);
      throw new TypeError("Empty Response");
    }

    await Shared.Set<T & { QueryExp: number }>(index, {
      ...res,
      QueryExp: dayjs().add(1, "m").unix()
    }, null);

    return res;
  }

  /**
   * @author Aloento
   * @since 1.0.0
   * @version 0.1.1
   */
  protected static async GetTimeCache<T>(
    this: INet, key: string | number, methodName: string, exp: Dayjs, ...args: any[]
  ): Promise<T> {
    const res = await Shared.GetOrSet(
      this.Index(key, methodName),
      async () => {
        const db = await this.Invoke<T>(methodName, ...args);
        return db;
      },
      exp
    );

    return res;
  }

  /**
   * @author Aloento
   * @since 1.0.0
   * @version 0.1.2
   */
  protected static async HandleFileStream(this: INet, file: File, subject: Subject<Uint8Array>, pLog: Logger) {
    const chunkSize = 30 * 1024;
    const chunks = Math.ceil(file.size / chunkSize);
    let index = 0;

    while (index < chunks) {
      const start = index * chunkSize;
      const end = Math.min(start + chunkSize, file.size);
      const chunk = file.slice(start, end);

      const reader = new FileReader();
      const buffer = await new Promise<Uint8Array>((res, rej) => {
        reader.onload = () => res(new Uint8Array(reader.result as ArrayBuffer));
        reader.onerror = () => rej(reader.error);
        reader.readAsArrayBuffer(chunk);
      });

      subject.next(buffer);
      pLog?.debug(`Sent chunk ${index + 1}/${chunks}`);
      index++;
    }

    subject.complete();
  }
}
