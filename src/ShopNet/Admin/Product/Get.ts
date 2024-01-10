import dayjs from "dayjs";
import { Observable } from "rxjs";
import type { Logger } from "~/Helpers/Logger";
import { IProductCount } from "~/Pages/Admin/Product";
import { IVariantItem } from "~/Pages/Admin/Product/Variant";
import { ProductGet } from "~/ShopNet/Product/Get";
import { AdminProductData } from "./Data";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.1
 */
export abstract class AdminProductGet extends AdminProductData {
  /** "Product", "Get" */
  protected static override readonly Log = [...super.Log, "Product", "Get"];

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 2.0.0
   */
  public static List(pLog: Logger): Observable<number[]> {
    const log = pLog.With(...this.Log, "List");

    this.GetTimeCache<number[]>("", "ProductGetList", dayjs().add(1, "m"))
      .then(list => this.SubList.next(list))
      .catch(log.error);

    return this.ObsList;
  }

  /**
   * @author Aloento
   * @since 1.3.0
   * @version 0.1.0
   */
  public static Count(prodId: number): Promise<IProductCount> {
    return this.GetTimeCache<IProductCount>(prodId, "ProductGetCount", dayjs().add(1, "m"), prodId);
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 1.0.0
   */
  public static async Name(prodId: number): Promise<string> {
    const prod = await ProductGet.Product(prodId);

    if (!prod)
      throw new Error(`Product ${prodId} Not Found`);

    return prod.Name;
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 1.0.0
   */
  public static async Category(prodId: number): Promise<string | undefined> {
    const prod = await ProductGet.Product(prodId);

    if (!prod)
      throw new Error(`Product ${prodId} Not Found`);

    return prod.Category;
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 1.0.1
   */
  public static async Variants(prodId: number, pLog: Logger): Promise<IVariantItem[]> {
    const log = pLog.With(...this.Log, "Variants");

    const list = await this.GetTimeCache<
      {
        VariantId: number;
        Types: number[];
      }[]
    >(prodId, "ProductGetVariants", dayjs().add(1, "m"), prodId);

    const items: IVariantItem[] = [];

    for (const meta of list) {
      const vari = await ProductGet.Variant(meta.VariantId);

      if (!vari) {
        log.warn(`Variant ${meta} Not Found. Product : ${prodId}`);
        continue;
      }

      const types: string[] = [];

      for (const typeId of meta.Types) {
        const type = await ProductGet.Type(typeId);

        if (!type) {
          log.warn(`Type ${typeId} Not Found. Variant : ${meta.VariantId}, Product : ${prodId}`);
          continue;
        }

        types.push(type.Name);
      }

      items.push({
        Id: meta.VariantId,
        Name: vari.Name,
        Types: types
      });
    }

    return items;
  }
}
