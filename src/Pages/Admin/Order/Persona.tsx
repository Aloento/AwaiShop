import { Field, Label } from "@fluentui/react-components";
import { useRequest } from "ahooks";
import { AdminHub } from "~/ShopNet/Admin";
import { useStyles } from "./Edit";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export function OrderPersona({ OrderId }: { OrderId: number; }) {
  const style = useStyles();
  const { data } = useRequest(AdminHub.User.Get.OrderUser, {
    defaultParams: [OrderId]
  });

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
        <Field label="E-Mail" size="large">
          <Label>{data?.EMail}</Label>
        </Field>
      </div>

      <div className={style.box}>
        <Field label="Status" size="large">
          <Label>Shipped</Label>
        </Field>
      </div>
    </div>

    <Field label="Address" size="large">
      <Label>{data?.Address}</Label>
    </Field>
  </>;
}
