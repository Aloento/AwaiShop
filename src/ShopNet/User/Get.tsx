import { Toast, ToastTitle } from "@fluentui/react-components";
import { useConst } from "@fluentui/react-hooks";
import { useRequest } from "ahooks";
import type { Options } from "ahooks/lib/useRequest/src/types";
import type { IPersona } from "~/Components/ShopCart/Persona";
import { NotLoginError } from "~/Helpers/Exceptions";
import type { Logger } from "~/Helpers/Logger";
import { useErrorToast } from "~/Helpers/useToast";
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
 * @since 0.5.0
 * @version 0.1.0
 */
export abstract class UserGet extends ShopNet {
  /**
   * @author Aloento
   * @since 1.0.0
   * @version 0.2.1
   */
  public static useMe(pLog: Logger, options?: Options<IUserGetMe | void, []>, suppress: boolean = true) {
    const log = useConst(() => pLog.With("|", "Hub", "User", "Get", "Me"));
    const { dispatch, dispatchToast } = useErrorToast(log);

    return useRequest(() => {
      this.EnsureLogin();
      return this.GetVersionCache<IUserGetMe>(0, "UserGetMe");
    }, {
      ...options,
      onError: (e, req) => {
        if (e instanceof NotLoginError) {
          if (suppress)
            log.debug(e);
          else
            dispatchToast(
              <Toast>
                <ToastTitle>{e.message}</ToastTitle>
              </Toast>,
              { intent: "warning", timeout: 5000 }
            );
        } else
          dispatch({
            Message: "Failed to Get Your Info",
            Error: e,
            Request: req
          })
      }
    });
  }
}
