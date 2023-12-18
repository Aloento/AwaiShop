import dayjs from "dayjs";
import { ICartItem } from "~/Components/ShopCart";
import { IOrderItem } from "~/Pages/History";
import { IComment } from "~/Pages/History/Comment";
import { IOrderDetail } from "~/Pages/History/Detail";
import { ProductEntity } from "../Product/Entity";
import { ProductGet } from "../Product/Get";
import { ShopNet } from "../ShopNet";
import { OrderEntity } from "./Entity";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.2.0
 */
export abstract class OrderGet extends ShopNet {
  protected static override readonly Log = super.Log.With("Order", "Get");

  private static readonly list = this.Log.With("List");

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 1.0.1
   */
  public static async List(): Promise<IOrderItem[]> {
    this.EnsureLogin();

    const list = await this.WithTimeCache<
      {
        OrderId: number;
        Products: number[];
        Quantity: number;
      }[]
    >("", "OrderGetList", dayjs().add(1, "m"));

    const items: IOrderItem[] = [];

    for (const meta of list) {
      const order = await OrderEntity.Order(meta.OrderId);

      if (!order) {
        this.list.warn(`[Mismatch] Order ${meta.OrderId} not found`);
        continue;
      }

      const prodNames: string[] = [];

      for (const prodId of meta.Products) {
        const prod = await ProductEntity.Product(prodId);

        if (!prod) {
          this.list.warn(`[Mismatch] Product ${prodId} not found`);
          continue;
        }

        prodNames.push(prod.Name);
      }

      items.push({
        Id: meta.OrderId,
        Items: prodNames,
        Quantity: meta.Quantity,
        Status: order.Status,
        TrackNumber: order.TrackingNumber,
        OrderDate: order.CreateAt
      });
    }

    return items.sort((a, b) => b.OrderDate.getTime() - a.OrderDate.getTime());
  }

  private static readonly detail = this.Log.With("Detail");

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 1.0.1
   */
  public static async Detail(orderId: number): Promise<IOrderDetail> {
    this.EnsureLogin();

    const meta = await this.WithTimeCache<
      {
        Items: {
          Types: number[];
          Quantity: number;
        }[],
        Comments: number[];
      }
    >(orderId, "OrderGetDetail", dayjs().add(1, "m"), orderId);

    const items: ICartItem[] = [];
    let index = 0;

    for (const combo of meta.Items) {
      const variType: Record<string, string> = {};
      let prodId = 0;

      for (const typeId of combo.Types) {
        const type = await ProductEntity.Type(typeId);

        if (!type) {
          this.detail.warn(`[Mismatch] Type ${typeId} not found. Order : ${orderId}`);
          continue;
        }

        const vari = await ProductEntity.Variant(type.VariantId);

        if (!vari) {
          this.detail.warn(`[Mismatch] Variant ${type.VariantId} not found. Type : ${typeId}, Order : ${orderId}`);
          continue;
        }

        variType[vari.Name] = type.Name;
        prodId = vari.ProductId;
      }

      const prod = await ProductEntity.Product(prodId);

      if (!prod) {
        this.detail.warn(`[Mismatch] Product ${prodId} not found. Order : ${orderId}`);
        continue;
      }

      const list = await ProductGet.PhotoList(prodId);
      const cover = await this.FindCover(list, prodId, this.detail);

      if (!cover)
        this.detail.warn(`Product ${prodId} has no photo`);

      items.push({
        Id: index++,
        ProdId: prodId,
        Cover: cover || "",
        Name: prod.Name,
        Type: variType,
        Quantity: combo.Quantity,
      });
    }

    const comments: IComment[] = [];

    for (const cmtId of meta.Comments) {
      const cmt = await OrderEntity.Comment(cmtId);

      if (!cmt) {
        this.detail.warn(`[Mismatch] Comment ${cmtId} not found. Order : ${orderId}`);
        continue;
      }

      comments.push({
        Content: cmt.Content,
        Time: cmt.CreateAt,
        User: cmt.Name || "You"
      });
    }

    return {
      ShopCart: items,
      Comments: comments.sort((a, b) => a.Time.getTime() - b.Time.getTime())
    };
  }

  public static Order = OrderEntity.Order;
}
