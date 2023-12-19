import { Button, Field, Textarea, Toast, ToastTitle, makeStyles } from "@fluentui/react-components";
import { useConst } from "@fluentui/react-hooks";
import { useState } from "react";
import { ICompLog } from "~/Helpers/Logger";
import { Flex } from "~/Helpers/Styles";
import { useErrorToast } from "~/Helpers/useToast";
import { AdminHub } from "~/ShopNet/Admin";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const useStyles = makeStyles({
  body: {
    ...Flex,
    justifyContent: "space-between"
  },
});

interface IAdminOrderAppend extends ICompLog {
  OrderId: number;
  Refresh: () => void;
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.2.2
 */
export function AdminOrderAppend({ OrderId, Refresh, ParentLog }: IAdminOrderAppend) {
  const log = useConst(() => ParentLog.With("Append"));

  const style = useStyles();
  const [cmt, setCmt] = useState<string>();

  const { dispatch, dispatchToast } = useErrorToast(log);

  const { run: append } = AdminHub.Order.Post.useAppend({
    manual: true,
    onError(e, params) {
      dispatch({
        Message: "Failed Append Comment",
        Request: params,
        Error: e
      });
    },
    onSuccess() {
      dispatchToast(
        <Toast>
          <ToastTitle>Comment Appended</ToastTitle>
        </Toast>,
        { intent: "success" }
      );

      Refresh();
    }
  });

  const { run: close } = AdminHub.Order.Post.useClose({
    manual: true,
    onError(e, params) {
      dispatch({
        Message: "Failed Close Order",
        Request: params,
        Error: e
      });
    },
    onSuccess() {
      dispatchToast(
        <Toast>
          <ToastTitle>Order Closed</ToastTitle>
        </Toast>,
        { intent: "success" }
      );

      Refresh();
    }
  });

  return <>
    <Field label="Append" size="large">
      <Textarea value={cmt} onChange={(_, v) => setCmt(v.value)} maxLength={1000} />
    </Field>

    <div className={style.body}>
      <Button onClick={() => close(OrderId, cmt!)}>
        Force Close with Reason
      </Button>

      <Button appearance="primary" onClick={() => append(OrderId, cmt!)}>
        Add Comment
      </Button>
    </div>
  </>;
}
