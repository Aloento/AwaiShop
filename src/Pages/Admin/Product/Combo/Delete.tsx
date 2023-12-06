import { Button, Toast, ToastTitle } from "@fluentui/react-components";
import { DeleteRegular } from "@fluentui/react-icons";
import { useRequest } from "ahooks";
import { useErrorToast } from "~/Helpers/useToast";
import { AdminHub } from "~/ShopNet/Admin";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.2.1
 */
export function AdminProductComboDelete({ ComboId, Refresh }: { ComboId: number; Refresh: () => void }) {
  const { dispatch, dispatchToast } = useErrorToast();

  const { run } = useRequest(AdminHub.Product.Delete.Combo.bind(AdminHub.Product.Delete), {
    manual: true,
    onError(e, req) {
      dispatch({
        Message: "Failed Delete Combo",
        Request: req,
        Error: e
      });
    },
    onSuccess() {
      dispatchToast(
        <Toast>
          <ToastTitle>Combo Deleted</ToastTitle>
        </Toast>,
        { intent: "success" }
      );

      Refresh();
    },
  });

  return (
    <Button
      appearance="subtle"
      icon={<DeleteRegular />}
      onClick={() => run(ComboId)}
    />
  )
}
