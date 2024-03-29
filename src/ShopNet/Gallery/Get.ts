import { ShopNet } from "../ShopNet";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export abstract class GalleryGet extends ShopNet {
  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.2.1
   */
  public static Categories(): Promise<string[]> {
    return this.GetTimeCache("", "GalleryGetCategories", (x) => x.add(1, "m"));
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.2.2
   */
  public static async Products(category: string): Promise<number[]> {
    const nums = await this.GetTimeCache<number[]>(category, "GalleryGetProducts", (x) => x.add(1, "m"), category);
    return nums;
  }
}
