import { useRequest } from "ahooks";
import { Options } from "ahooks/lib/useRequest/src/types";
import { AdminNet } from "../AdminNet";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.2.0
 */
export class AdminUserPost extends AdminNet {
  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static Admin(options: Options<true, [string]>) {
    return useRequest((userId) => this.Invoke<true>("UserPostAdmin", userId), options);
  }
}
