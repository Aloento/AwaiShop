import { random } from "lodash-es";
import { createUID } from "~/Lexical/Utils/createUID";
import { IOrderExtension, IOrderItem } from "~/Pages/History";
import { IOrderDetail } from "~/Pages/History/Detail";
import { ShopNet } from "../ShopNet";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export class OrderGet extends ShopNet {
  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static async List(): Promise<IOrderItem[]> {
    await this.EnsureConnected();

    return [
      {
        Id: 1,
        Items: ["OTC SHIRT - GREY", "OTC Cap - Cap and Cap"],
        Quantity: 2,
        OrderDate: new Date(),
        TrackNumber: "Number123456789",
        Status: "Finished"
      },
      {
        Id: 2,
        Items: ["OTC Cap - Cap and Cap"],
        Quantity: 1,
        OrderDate: new Date(),
        TrackNumber: "Number123456789",
        Status: "Finished"
      },
    ];
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static async Detail(id: number): Promise<IOrderDetail> {
    await this.EnsureConnected();

    return {
      ShopCart: [
        {
          Id: 1,
          ProdId: random(1, 10),
          Cover: "https://picsum.photos/550",
          Name: "OTC SHIRT - GREY",
          Type: {
            Color: "White",
            Size: "S"
          },
          Quantity: 1
        },
        {
          Id: 2,
          ProdId: random(1, 10),
          Cover: "https://picsum.photos/600",
          Name: "OTC Cap - Cap and Cap",
          Type: {
            Color: "Red",
            Size: "Long and Long"
          },
          Quantity: 1
        }
      ],
      Comments: Array(10).fill(0).map(() => createUID())
    }
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static async Extension(orderId: number): Promise<IOrderExtension> {
    await this.EnsureConnected();

    return {
      OrderDate: new Date(),
      TrackNumber: "Number123456789",
      Status: "Finished"
    };
  }
}
