import { Button, Field, Textarea, Toast, ToastBody, ToastTitle, makeStyles, tokens, useToastController } from "@fluentui/react-components";
import { Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle } from "@fluentui/react-components/unstable";
import { DismissRegular, OpenRegular } from "@fluentui/react-icons";
import { useBoolean, useRequest } from "ahooks";
import { useState } from "react";
import { DelegateDataGrid } from "~/Components/DataGrid/Delegate";
import { useRouter } from "~/Components/Router";
import { useShopCart } from "~/Components/ShopCart/Context";
import { ConfirmPersona } from "~/Components/ShopCart/Persona";
import { ColFlex } from "~/Helpers/Styles";
import { use500Toast } from "~/Helpers/Toast";
import { Hub } from "~/ShopNet";
import { DetailColumns } from "./Columns";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export const useStyles = makeStyles({
  body: {
    ...ColFlex,
    rowGap: tokens.spacingVerticalL
  },
  sub: {
    width: "fit-content",
    alignSelf: "flex-end"
  }
});

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export function OrderDetail() {
  const [cmt, setCmt] = useState<string>();
  const [open, { toggle }] = useBoolean();

  const { List, Update } = useShopCart();
  const { Nav } = useRouter();
  const style = useStyles();

  const { dispatchToast } = useToastController();
  const dispatchError = use500Toast();

  const { run } = useRequest(Hub.Order.Post.New, {
    onFinally([req], data, e) {
      if (e)
        dispatchError(new Error("Cannot Create Order", {
          cause: {
            Request: req,
            Error: e
          }
        }));

      dispatchToast(
        <Toast>
          <ToastTitle>Order Canceled</ToastTitle>
          <ToastBody>Order Id: {data}</ToastBody>
        </Toast>,
        { intent: "success" }
      );

      Update([]);
      toggle();
      Nav("History", `${data}`);
    },
    manual: true,
  })

  return <>
    <Button appearance="subtle" icon={<OpenRegular />} onClick={toggle} />

    <Drawer
      open={open}
      onOpenChange={toggle}
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
              onClick={toggle}
            />
          }
        >
          Order Detail
        </DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody>
        <div className={style.body}>
          <ConfirmPersona />

          <DelegateDataGrid Items={List} Columns={DetailColumns} />

          <Field label="Comment" size="large">
            <Textarea value={cmt} onChange={(_, v) => setCmt(v.value)} maxLength={1000} />
          </Field>

          <Button
            appearance="primary"
            className={style.sub}
            disabled={!List.length}
            onClick={() => run({
              ShopCart: List,
              Comment: cmt
            })}
          >
            Submit
          </Button>
        </div>
      </DrawerBody>
    </Drawer>
  </>
}
