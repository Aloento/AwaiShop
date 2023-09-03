import { ProductInfo } from "~/Pages/Gallery";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export class ProductGet {
  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static async Basic(id: number): Promise<ProductInfo> {
    return {
      Image: "https://source.unsplash.com/random",
      Name: `Product ${id}`
    }
  }
}
