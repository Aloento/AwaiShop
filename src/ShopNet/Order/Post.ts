import { useRequest } from "ahooks";
import { Options } from "ahooks/lib/useRequest/src/types";
import { ICartItem } from "~/Components/ShopCart";
import { ShopNet } from "../ShopNet";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export abstract class OrderPost extends ShopNet {
  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.2.0
   */
  public static useNew(options: Options<number, [ICartItem[], string | undefined]>) {
    return useRequest((cart, cmt) => {
      this.EnsureLogin();

      const req = cart.map(x => {
        const { Id, ...rest } = x;
        return {
          OrderId: Id,
          ...rest
        };
      });

      return this.Invoke<number>("OrderPostNew", req, cmt);
    }, options);
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static async Append(orderId: number, cmt: string): Promise<true> {
    this.EnsureLogin();
    const res = await this.Invoke<true>("OrderPostNew", orderId, cmt);
    return res;
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static async Cancel(orderId: number, reason: string): Promise<true> {
    this.EnsureLogin();
    const res = await this.Invoke<true>("OrderPostCancel", orderId, reason);
    return res;
  }
}
