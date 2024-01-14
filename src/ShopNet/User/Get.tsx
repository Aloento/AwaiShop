import { Toast, ToastTitle } from "@fluentui/react-components";
import { useConst } from "@fluentui/react-hooks";
import { useRequest } from "ahooks";
import type { Options } from "ahooks/lib/useRequest/src/types";
import { useEffect, useState } from "react";
import { NotLoginError } from "~/Helpers/Exceptions";
import type { Logger } from "~/Helpers/Logger";
import { useErrorToast } from "~/Helpers/useToast";
import { IUserGetMe, UserData } from "./Data";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.2.0
 */
export abstract class UserGet extends UserData {
  /**
   * @author Aloento
   * @since 1.0.0
   * @version 0.3.0
   */
  public static useMe(pLog: Logger, options?: Options<IUserGetMe, []>, suppress: boolean = true) {
    const log = useConst(() => pLog.With("|", "Hub", "User", "Get", "Me"));
    const { dispatch, dispatchToast } = useErrorToast(log);

    const [data, setData] = useState<IUserGetMe>();
    useEffect(() => {
      const sub = this.ObsMe.subscribe(val => setData(val));
      return () => sub.unsubscribe();
    }, []);

    const hook = useRequest(() => {
      this.EnsureLogin();
      return this.GetVersionCache<IUserGetMe>(0, "UserGetMe");
    }, {
      ...options,
      onSuccess: (data, params) => {
        this.SubMe.next(data);
        options?.onSuccess?.(data, params);
      },
      onError(e) {
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
            Request: ""
          })
      }
    });

    hook.data = data;
    return hook;
  }
}
