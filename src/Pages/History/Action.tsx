import { Button, Field, Toast, ToastTitle, makeStyles } from "@fluentui/react-components";
import { useRequest } from "ahooks";
import { ColFlex } from "~/Helpers/Styles";
import { useErrorToast } from "~/Helpers/useToast";
import { Hub } from "~/ShopNet";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const useStyles = makeStyles({
  body: {
    ...ColFlex,
    alignItems: "flex-start",
  },
});

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
interface IOrderAction {
  OrderId: number;
  Refresh: () => void;
}

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.1.0
 */
export function OrderAction({ OrderId, Refresh }: IOrderAction) {
  const style = useStyles();
  const { dispatch, dispatchToast } = useErrorToast();

  const { run: received } = Hub.Order.Post.useReceived({
    manual: true,
    onError(e, req) {
      dispatch({
        Message: "Failed Mark Receive",
        Request: req,
        Error: e
      });
    },
    onSuccess() {
      dispatchToast(
        <Toast>
          <ToastTitle>Order Received</ToastTitle>
        </Toast>,
        { intent: "success" }
      );

      Refresh();
    }
  });

  const { run: remove } = Hub.Order.Delete.useDelete({
    manual: true,
    onError(e, params) {
      dispatch({
        Message: "Failed Delete Order",
        Request: params,
        Error: e
      });
    },
    onSuccess() {
      dispatchToast(
        <Toast>
          <ToastTitle>Order Deleted</ToastTitle>
        </Toast>,
        { intent: "success" }
      );

      Refresh();
    }
  });

  const { data: order } = useRequest(() => Hub.Order.Get.Order(OrderId));

  switch (order?.Status) {
    case "Pending":
    case "Processing":
    // case "Shipping":
    case "Finished":
    // case "Cancelled":
    case "Returning":
      return null;
  }

  return (
    <Field label="Action" size="large">
      <div className={style.body}>
        {
          order?.Status === "Cancelled" &&
          <Button appearance="subtle" onClick={() => remove(OrderId)}>
            Delete Order
          </Button>
        }

        {
          order?.Status === "Shipping" &&
          <Button appearance="subtle" onClick={() => received(OrderId)}>
            I Received Order
          </Button>
        }
      </div>
    </Field>
  );
}
