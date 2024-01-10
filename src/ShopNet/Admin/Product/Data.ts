import { BehaviorSubject } from "rxjs";
import { AdminNet } from "../AdminNet";

/**
 * @author Aloento
 * @since 1.3.0
 * @version 0.1.0
 */
export abstract class AdminProductData extends AdminNet {
  /**
   * @author Aloento
   * @since 1.3.0
   * @version 0.1.0
   */
  protected static SubList = new BehaviorSubject<number[]>([]);
  public static ObsList = this.SubList.asObservable();
}
