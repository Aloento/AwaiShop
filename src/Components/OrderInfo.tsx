import { Field, Label, makeStyles, tokens } from "@fluentui/react-components";
import { useRequest } from "ahooks";
import { Logger } from "~/Helpers/Logger";
import { ColFlex, Flex } from "~/Helpers/Styles";
import { Hub } from "~/ShopNet";
import { AdminHub } from "~/ShopNet/Admin";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const useStyles = makeStyles({
  flex: Flex,
  box: {
    ...ColFlex,
    flexBasis: "50%",
    rowGap: tokens.spacingVerticalM
  },
});

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.1.1
 */
interface IOrderInfo {
  OrderId: number;
  Order: Awaited<ReturnType<typeof Hub.Order.Get.Order>>;
  Admin?: true;
}

const log = new Logger("Order", "Info");

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.4.1
 */
export function OrderInfo({ OrderId, Order, Admin }: IOrderInfo) {
  const style = useStyles();

  const { data: admin } = useRequest(() => AdminHub.User.Get.OrderUser(OrderId), {
    manual: !Admin,
    onError: log.error
  });

  const { data: me } = Hub.User.Get.useMe(log, {
    manual: Admin
  });

  const data = Admin ? admin : me;

  return <>
    <div className={style.flex}>
      <div className={style.box}>
        <Field label="Name" size="large">
          <Label>{data?.Name}</Label>
        </Field>
      </div>

      <div className={style.box}>
        <Field label="Phone" size="large">
          <Label>{data?.Phone}</Label>
        </Field>
      </div>
    </div>

    <div className={style.flex}>
      <div className={style.box}>
        <Field label="Order Date" size="large">
          <Label>{Order?.CreateAt.toLocaleDateString()}</Label>
        </Field>
      </div>

      <div className={style.box}>
        <Field label="Status" size="large">
          <Label>{Order?.Status}</Label>
        </Field>
      </div>
    </div>

    <div className={style.flex}>
      <div className={style.box}>
        <Field label="E-Mail" size="large">
          <Label>{data?.EMail}</Label>
        </Field>
      </div>

      {
        !Admin &&
        <div className={style.box}>
          <Field label="Tracking Number" size="large">
            <Label>{Order?.TrackingNumber}</Label>
          </Field>
        </div>
      }
    </div>

    <Field label="Address" size="large">
      <Label>{data?.Address}</Label>
    </Field>
  </>;
}
