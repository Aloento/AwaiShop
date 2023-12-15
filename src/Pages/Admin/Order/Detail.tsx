import { Button, Field, makeStyles, tokens } from "@fluentui/react-components";
import { Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle } from "@fluentui/react-components/unstable";
import { DismissRegular, OpenRegular } from "@fluentui/react-icons";
import { useBoolean, useRequest } from "ahooks";
import { useEffect } from "react";
import { OrderInfo } from "~/Components/OrderInfo";
import { useRouter } from "~/Components/Router";
import { ColFlex } from "~/Helpers/Styles";
import { OrderComment } from "~/Pages/History/Comment";
import { Hub } from "~/ShopNet";
import { AdminOrderAction } from "./Action";
import { AdminOrderAppend } from "./Append";
import { AdminOrderList } from "./List";
import { Shipment } from "./Ship";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const useStyles = makeStyles({
  body: {
    ...ColFlex,
    rowGap: tokens.spacingVerticalXL
  }
});

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.2.2
 */
export function AdminOrderDetail({ OrderId }: { OrderId: number; }) {
  const style = useStyles();
  const [open, { setTrue, setFalse }] = useBoolean();

  const { Nav, Paths } = useRouter();
  const curr = parseInt(Paths.at(2)!);

  const { data, run: runDetail } = useRequest(() => Hub.Order.Get.Detail(OrderId), {
    manual: true
  })

  const { data: order, run: runOrder } = useRequest(() => Hub.Order.Get.Order(OrderId), {
    onError(e) {
      Nav("Admin", "Order");
      console.error(e);
    },
    manual: true
  });

  function run() {
    runOrder();
    runDetail();
  }

  useEffect(() => {
    if (curr === OrderId) {
      run();
      setTrue();
    } else
      setFalse();
  }, [curr]);

  return <>
    <Button
      appearance="subtle"
      icon={<OpenRegular />}
      onClick={() => Nav("Admin", "Order", OrderId)}
    />

    <Drawer
      open={open}
      position="end"
      size="medium"
      modalType="alert"
    >
      <DrawerHeader>
        <DrawerHeaderTitle
          action={
            <Button
              appearance="subtle"
              icon={<DismissRegular />}
              onClick={() => Nav("Admin", "Order")}
            />
          }
        >
          Order Detail
        </DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody className={style.body}>
        <OrderInfo OrderId={OrderId} Order={order} Admin />

        <Field label="Required Products" size="large">
          <AdminOrderList Items={data?.ShopCart} />
        </Field>

        <Shipment OrderId={OrderId} Refresh={run} />

        <OrderComment Comments={data?.Comments} />

        <AdminOrderAppend OrderId={OrderId} Refresh={run} />

        <AdminOrderAction OrderId={OrderId} Order={order} Refresh={run} />
      </DrawerBody>
    </Drawer>
  </>
}
