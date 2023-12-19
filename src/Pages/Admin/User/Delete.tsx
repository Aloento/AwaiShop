import { Button, Toast, ToastTitle } from "@fluentui/react-components";
import { useConst } from "@fluentui/react-hooks";
import { DeleteRegular } from "@fluentui/react-icons";
import { ICompLog } from "~/Helpers/Logger";
import { useErrorToast } from "~/Helpers/useToast";
import { AdminHub } from "~/ShopNet/Admin";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.2
 */
export function AdminUserDelete({ UserId, Refresh, ParentLog }: { UserId: string; Refresh: () => void } & ICompLog) {
  const log = useConst(() => ParentLog.With("Delete"));

  const { dispatch, dispatchToast } = useErrorToast(log);

  const { run } = AdminHub.User.Delete.useUser({
    manual: true,
    onError(e, req) {
      dispatch({
        Message: "Failed Delete User",
        Request: req,
        Error: e
      });
    },
    onSuccess() {
      dispatchToast(
        <Toast>
          <ToastTitle>User Deleted</ToastTitle>
        </Toast>,
        { intent: "success" }
      );

      Refresh();
    }
  });

  return (
    <Button
      appearance="subtle"
      icon={<DeleteRegular />}
      onClick={() => run(UserId)}
    />
  )
}
