import { Button } from "@fluentui/react-components";
import { Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle } from "@fluentui/react-components/unstable";
import { useConst } from "@fluentui/react-hooks";
import { DismissRegular, OpenRegular } from "@fluentui/react-icons";
import { useBoolean, useInViewport } from "ahooks";
import { useEffect, useRef } from "react";
import { IComment } from "~/Components/Order/Comment";
import { useRouter } from "~/Components/Router";
import { ICartItem } from "~/Components/ShopCart";
import { ICompLog } from "~/Helpers/Logger";
import { OrderDetailDrawer } from "../../Components/Order/Drawer";

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.1.1
 */
export interface IOrderDetail {
  ShopCart: ICartItem[];
  Comments?: IComment[];
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 1.1.0
 */
export function OrderDetail({ OrderId, ParentLog }: { OrderId: number } & ICompLog) {
  const log = useConst(() => ParentLog.With("Detail"));

  const [open, { set }] = useBoolean();
  const { Nav, Paths } = useRouter();
  const curr = parseInt(Paths.at(1)!);

  useEffect(() => set(curr === OrderId), [curr]);
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);

  return <>
    <Button
      appearance="subtle"
      icon={<OpenRegular />}
      onClick={() => Nav("History", OrderId)}
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
              onClick={() => Nav("History")}
            />
          }
        >
          Order Detail
        </DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody ref={ref}>
        {inViewport && <OrderDetailDrawer OrderId={OrderId} ParentLog={log} />}
      </DrawerBody>
    </Drawer>
  </>
}
