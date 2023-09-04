import { random } from "lodash-es";
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
      Image: `https://picsum.photos/${random(500, 1000)}`,
      Name: `Product ${id}`
    }
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static async Carousel(id: number): Promise<string[]> {
    return Array(random(3, 8)).fill(0)
      .map(() => `https://picsum.photos/${random(500, 1000)}`)
  }
}
