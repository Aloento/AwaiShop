import { ICartItem } from "~/Components/ShopCart";
import { StatusCode } from "~/Helpers/StatusCode";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
interface INew {
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
  public static async New(req: INew): Promise<StatusCode> {
    throw StatusCode.Created;
  }
}
