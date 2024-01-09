import { useRequest } from "ahooks";
import type { Options } from "ahooks/lib/useRequest/src/types";
import type { IPersona } from "~/Components/ShopCart/Persona";
import { IUserGetMe, UserData } from "./Data";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.2.0
 */
export abstract class UserPost extends UserData {
  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.3.0
   */
  public static useUpdate(options: Options<true, [Partial<IPersona>]>) {
    return useRequest(async req => {
      this.EnsureLogin();
      const res = await this.Invoke<boolean>("UserPostUpdate", req);

      this.EnsureTrue(res);
      await this.UpdateCache<IUserGetMe>(raw => {
        const res = { ...raw, ...req };
        this.Me.next(res);
        return res;
      }, 0, "UserGetMe");

      return res;
    }, options);
  }
}
