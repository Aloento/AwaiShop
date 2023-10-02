import { random } from "lodash-es";
import { ICartItem } from "~/Components/ShopCart";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export interface INetOrder {
  ShopCart: ICartItem[];
  Comment?: string;
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export class OrderPost {
  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static async New(req: INetOrder): Promise<number> {
    return random(1, 100);
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static async Append(id: number, cmt: string): Promise<true> {
    throw new Error("TODO");
  }
}