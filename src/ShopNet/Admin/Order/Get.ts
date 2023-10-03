import { IHistoryItem } from "~/Pages/History";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export class AdminOrderGet {
  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static async List(): Promise<IHistoryItem[]> {
    return [
      {
        Id: 1,
        Orders: ["OTC SHIRT - GREY", "OTC Cap - Cap and Cap"],
        Quantity: 2,
        OrderDate: new Date(),
        TrackNumber: "Number123456789",
        Status: "Finished"
      },
      {
        Id: 2,
        Orders: ["OTC Cap - Cap and Cap"],
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
  public static async Status(orderId: number): Promise<string> {
    return "Shipped";
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static async Track(orderId: number): Promise<string> {
    return "Number123456789";
  }
}
