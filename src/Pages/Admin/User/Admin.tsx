import { Checkbox, Toast, ToastTitle } from "@fluentui/react-components";
import { useRequest } from "ahooks";
import { useErrorToast } from "~/Helpers/useToast";
import { AdminHub } from "~/ShopNet/Admin";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.1
 */
export function AdminUserAdmin({ UserId, Admin, Refresh }: { UserId: string; Admin?: boolean; Refresh: () => void }) {
  const { dispatch, dispatchToast } = useErrorToast();

  const { run: grant } = AdminHub.User.Post.Admin({
    manual: true,
    onError(e, req) {
      dispatch({
        Message: "Failed Grant Admin",
        Request: req,
        Error: e
      });
    },
    onSuccess() {
      dispatchToast(
        <Toast>
          <ToastTitle>Admin Granted</ToastTitle>
        </Toast>,
        { intent: "success" }
      );

      Refresh();
    }
  });

  const { run: revoke } = useRequest(AdminHub.User.Delete.Admin.bind(AdminHub.User.Delete), {
    manual: true,
    onFinally(req, _, e) {
      if (e)
        return dispatch({
          Message: "Failed Revoke Admin",
          Request: req,
          Error: e
        });

      dispatchToast(
        <Toast>
          <ToastTitle>Admin Revoked</ToastTitle>
        </Toast>,
        { intent: "success" }
      );

      Refresh();
    },
  });

  return (
    <Checkbox
      checked={Admin}
      onChange={(_, e) => {
        if (e.checked)
          grant(UserId);
        else
          revoke(UserId);
      }}
    />
  )
}
