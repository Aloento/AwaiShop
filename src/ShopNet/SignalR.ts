import { HubConnectionState } from "@microsoft/signalr";
import dayjs, { Dayjs } from "dayjs";
import { Subject } from "rxjs";
import { NotLoginError, NotTrueError } from "~/Helpers/Exceptions";
import { MSAL, Shared, type IConcurrency } from "./Database";
import type { INet } from "./INet";

/**
 * @author Aloento
 * @since 1.0.0
 * @version 1.0.0
 */
export abstract class SignalR {
  /**
   * Catched
   * 
   * @author Aloento
   * @since 1.0.0
   * @version 0.1.2
   */
  protected static async EnsureConnected(this: INet): Promise<void> {
    if (this.Hub.state === HubConnectionState.Connected)
      return Promise.resolve();

    if (this.Hub.state === HubConnectionState.Disconnected
      || this.Hub.state === HubConnectionState.Disconnecting)
      try {
        await this.Hub.start();
      } catch (error) {
        this.Log.throw();
        throw error;
      }

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
   * Catched
   * 
   * @author Aloento
   * @since 1.0.0
   * @version 0.1.1
   */
  protected static async Invoke<T>(this: INet, methodName: string, ...args: any[]): Promise<T> {
    await this.EnsureConnected();
    try {
      return await this.Hub.invoke<T>(methodName, ...args);
    } catch (error) {
      this.Log.throw();
      throw error;
    }
  }

  /**
   * Catched
   * 
   * @author Aloento
   * @since 1.0.0
   * @version 0.2.2
   */
  protected static EnsureLogin(this: INet) {
    if (!MSAL.getActiveAccount()) {
      this.Log.throw();
      throw new NotLoginError();
    }
  }

  /**
   * Catched
   * 
   * @author Aloento
   * @since 1.0.0
   * @version 0.1.1
   */
  protected static EnsureTrue(this: INet, res: boolean | null | undefined): asserts res is true {
    if (!res) {
      this.Log.throw();
      throw new NotTrueError();
    }
  }

  /**
   * @author Aloento
   * @since 1.0.0
   * @version 0.2.1
   */
  protected static async WithVersionCache<T extends IConcurrency>(
    this: INet, key: string | number, methodName: string, admin?: boolean
  ): Promise<T | void> {
    const index = `${methodName}_${admin ? `Admin_${key}` : key}`;
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

    if (!res)
      return Shared.Sto.delete(index);

    Shared.Set<T & { QueryExp: number }>(index, {
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
  protected static async WithTimeCache<T>(
    this: INet, key: string | number, methodName: string, exp: Dayjs, ...args: any[]
  ): Promise<T> {
    const res = await Shared.GetOrSet(
      `${methodName}_${key}`,
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
   * @version 0.2.1
   */
  protected static async FindCover(this: INet, photos: number[], prodId?: number): Promise<string | void> {
    const list = [];

    for (const photoId of photos) {
      const photo = await (await import("./Product/Entity")).ProductEntity.Photo(photoId);

      if (photo) {
        list.push(photo);

        if (photo.Cover)
          return photo.ObjectId;
      } else
        this.Log.warn(`Photo ${photoId} not found in Product ${prodId}`);
    }

    if (list.length > 0) {
      this.Log.warn(`Product ${prodId} has no cover photo, using first photo instead`);
      return list.sort((a, b) => a.Order - b.Order)[0].ObjectId;
    }
  }

  /**
   * Catched
   * 
   * @author Aloento
   * @since 1.0.0
   * @version 0.1.1
   */
  protected static async HandleFileStream(this: INet, file: File, subject: Subject<Uint8Array>) {
    const chunkSize = 30 * 1024;
    const chunks = Math.ceil(file.size / chunkSize);
    let index = 0;

    while (index < chunks) {
      const start = index * chunkSize;
      const end = Math.min(start + chunkSize, file.size);
      const chunk = file.slice(start, end);

      const reader = new FileReader();
      const buffer = await new Promise<Uint8Array>((resolve, reject) => {
        reader.onload = () => resolve(new Uint8Array(reader.result as ArrayBuffer));
        reader.onerror = () => {
          this.Log.throw();
          reject(reader.error);
        };
        reader.readAsArrayBuffer(chunk);
      });

      subject.next(buffer);
      this.Log.debug(`Sent chunk ${index + 1}/${chunks}`);
      index++;
    }

    subject.complete();
  }
}
