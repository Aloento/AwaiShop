import { Subject } from "rxjs";
import type { IPersona } from "~/Components/ShopCart/Persona";
import type { IConcurrency } from "../Database";
import { ShopNet } from "../ShopNet";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.2.0
 */
export interface IUserGetMe extends IPersona, IConcurrency {
  Admin?: boolean;
}

/**
 * @author Aloento
 * @since 1.3.0
 * @version 0.1.0
 */
export abstract class UserData extends ShopNet {
  /**
   * @author Aloento
   * @since 1.3.0
   * @version 0.1.0
   */
  protected static SubMe = new Subject<IUserGetMe>();
  public static ObsMe = this.SubMe.asObservable();
}
