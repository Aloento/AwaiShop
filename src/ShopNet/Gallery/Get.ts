import { random } from "lodash-es";
import { ProductInfo } from "~/Pages/Gallery";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export class GalleryGet {
  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static async Categories(): Promise<string[]> {
    return [
      "T-Shirt",
      "Cap"
    ];
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static async Products(category: string): Promise<[number[], number]> {
    const len = random(1, 12);
    const nums: number[] = Array(len).fill(0).map(() => random(1, 100));

    return [
      nums,
      4 - (len % 4)
    ]
  }

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
