import { Button, makeStyles, tokens } from "@fluentui/react-components";
import { Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle } from "@fluentui/react-components/unstable";
import { DismissRegular, OpenRegular } from "@fluentui/react-icons";
import { useBoolean, useRequest } from "ahooks";
import { useEffect } from "react";
import { CommentAppend } from "~/Components/Order/Append";
import { OrderComment } from "~/Components/Order/Comment";
import { OrderInfo } from "~/Components/Order/Info";
import { useRouter } from "~/Components/Router";
import { Logger } from "~/Helpers/Logger";
import { ColFlex } from "~/Helpers/Styles";
import { AdminHub } from "~/ShopNet/Admin";
import { AdminOrderAction } from "./Action";
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

const log = new Logger("Admin", "Order", "Detail");

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.4.0
 */
export function AdminOrderDetail({ OrderId }: { OrderId: number; }) {
  const style = useStyles();
  const [open, { setTrue, setFalse }] = useBoolean();

  const { Nav, Paths } = useRouter();
  const curr = parseInt(Paths.at(2)!);

  const { data, run: runDetail } = useRequest(() => AdminHub.Order.Get.Detail(OrderId, log), {
    manual: true,
    onError: log.error
  });

  const { data: order, run: runOrder } = useRequest(() => AdminHub.Order.Get.Order(OrderId), {
    onError(e) {
      Nav("Admin", "Order");
      log.error(e);
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

        <AdminOrderList Items={data?.ShopCart} />

        <Shipment OrderId={OrderId} TrackingNumber={order?.TrackingNumber} Refresh={run} />

        <OrderComment Comments={data?.Comments} />

        <CommentAppend OrderId={OrderId} Status={order?.Status} Admin Refresh={run} ParentLog={log} />

        <AdminOrderAction OrderId={OrderId} Status={order?.Status} Refresh={run} />
      </DrawerBody>
    </Drawer>
  </>
}
