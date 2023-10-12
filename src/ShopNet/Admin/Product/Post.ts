import { AdminNet } from "../AdminNet";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export class AdminProductPost extends AdminNet {
  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static async Create(name: string): Promise<number> {
    await this.EnsureAdmin();
    const res = await this.Hub.invoke<number>("ProductPostCreate", name);
    return res;
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static async MovePhoto(photoId: number, up: boolean): Promise<true> {
    await this.EnsureAdmin();
    const res = await this.Hub.invoke<true>("ProductPostMovePhoto", name);
    return res;
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static async Photo(file: File): Promise<true> {
    if (!file.type.startsWith("image/"))
      throw new TypeError("File is not an image");

    await this.EnsureAdmin();
    const res = await this.Hub.invoke<true>("ProductPostPhoto", name);
    return res;
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static async Variant(prodId: number, name: string): Promise<number> {
    await this.EnsureAdmin();
    const res = await this.Hub.invoke<number>("ProductPostVariant", name);
    return res;
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static async Type(variantId: number, name: string): Promise<true> {
    await this.EnsureAdmin();
    const res = await this.Hub.invoke<true>("ProductPostType", name);
    return res;
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static async Combo(prodId: number, combo: Record<string, string>, stock: number): Promise<number> {
    await this.EnsureAdmin();
    const res = await this.Hub.invoke<number>("ProductPostCombo", name);
    return res;
  }
}
