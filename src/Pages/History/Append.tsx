import { Button, Field, Textarea, Toast, ToastTitle, makeStyles } from "@fluentui/react-components";
import { useRequest } from "ahooks";
import { useState } from "react";
import { Flex } from "~/Helpers/Styles";
import { use500Toast } from "~/Helpers/useToast";
import { Hub } from "~/ShopNet";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export const useStyles = makeStyles({
  body: {
    ...Flex,
    justifyContent: "space-between"
  },
});

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.2.0
 */
export function OrderAppend({ OrderId, Refresh }: { OrderId: number; Refresh: () => void }) {
  const style = useStyles();
  const [cmt, setCmt] = useState<string>();

  const { dispatchError, dispatchToast } = use500Toast();

  const { run: append } = useRequest(Hub.Order.Post.Append, {
    manual: true,
    onFinally([req], data, e) {
      if (e)
        dispatchError({
          Message: "Failed Append Comment",
          Request: req,
          Error: e
        });

      dispatchToast(
        <Toast>
          <ToastTitle>Comment Appended</ToastTitle>
        </Toast>,
        { intent: "success" }
      );

      Refresh();
    },
  });

  return <>
    <Field label="Append" size="large">
      <Textarea value={cmt} onChange={(_, v) => setCmt(v.value)} maxLength={1000} />
    </Field>

    <div className={style.body}>
      <Button>
        Cancel Order with Reason
      </Button>

      <Button appearance="primary" onClick={() => append(OrderId, cmt!)}>
        Add Comment
      </Button>
    </div>
  </>;
}