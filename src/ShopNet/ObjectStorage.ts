import { IStreamResult } from "@microsoft/signalr";
import { Logger } from "~/Helpers/Logger";
import { Shared } from "./Database";
import { ShopNet } from "./ShopNet";

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.1.1
 */
export class ObjectStorage extends ShopNet {
  static Log = new Logger("ObjectStorage");

  /**
   * @author Aloento
   * @since 1.0.0
   * @version 0.2.0
   */
  public static async Get(objId: string): Promise<IStreamResult<Uint8Array>> {
    if (!/^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(objId))
      throw new Error(`Invalid ObjectId ${objId}`);

    await this.EnsureConnected();
    return this.Hub.stream<Uint8Array>("ObjectStorageGet", objId);
  }

  /**
   * @author Aloento
   * @since 1.0.0
   * @version 0.2.1
   */
  public static GetBySlice(objId: string): Promise<Uint8Array[]> {
    const slice: Uint8Array[] = [];
    const my = this;

    return Shared.GetOrSet(objId, () => new Promise(
      (resolve, reject) => {
        my.Get(objId).then(x =>
          x.subscribe({
            error(err) {
              reject(err);
            },
            next(value) {
              slice.push(value);
              my.Log.debug("Received Slice", objId, slice.length);
            },
            complete() {
              resolve(slice);
            },
          })
        );
      })
    );
  }
}
