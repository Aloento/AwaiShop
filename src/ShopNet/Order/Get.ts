import { createUID } from "~/Lexical/Utils/createUID";
import { INetOrder } from "./Post";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export class OrderGet {
  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static async Detail(id: number): Promise<INetOrder> {
    return {
      Name: "Aloento",
      Phone: "+36 300000000",
      Address: Array(10).fill(0).map(() => createUID()).reduce((prev, curr) => prev + curr, ""),
    }
  }
}
