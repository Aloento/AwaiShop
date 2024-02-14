import { Field, Label, makeStyles, tokens } from "@fluentui/react-components";
import { useConst } from "@fluentui/react-hooks";
import { useRequest } from "ahooks";
import { ColFlex, Flex } from "~/Helpers/Styles";
import { Hub } from "~/ShopNet";
import { AdminHub } from "~/ShopNet/Admin";
import type { OrderEntity } from "~/ShopNet/Order/Entity";
import type { IOrderComp } from ".";

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

interface IOrderInfo extends IOrderComp {
  Order?: OrderEntity.Order;
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 1.0.0
 */
export function OrderInfo({ OrderId, Order, Admin, ParentLog }: IOrderInfo) {
  const log = useConst(() => ParentLog.With("Info"));
  const style = useStyles();

  const { data: admin } = useRequest(() => AdminHub.User.Get.OrderUser(OrderId), {
    manual: !Admin,
    onError: log.error
  });

  const me = Hub.User.Get.useMe(log, Admin);

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