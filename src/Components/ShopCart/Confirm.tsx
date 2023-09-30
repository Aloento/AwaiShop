import { Button, Field, Textarea, makeStyles, tokens } from "@fluentui/react-components";
import { Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle } from "@fluentui/react-components/unstable";
import { DismissRegular } from "@fluentui/react-icons";
import { useBoolean, useRequest } from "ahooks";
import { useState } from "react";
import { ColFlex } from "~/Helpers/Styles";
import { use500Toast } from "~/Helpers/Toast";
import { Hub } from "~/ShopNet";
import { DelegateDataGrid } from "../DataGrid/Delegate";
import { CartColumns } from "./Columns";
import { useShopCart } from "./Context";
import { ConfirmPersona } from "./Persona";

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
 * @since 0.1.0
 * @version 0.3.2
 */
export function Confirm() {
  const [cmt, setCmt] = useState<string>();
  const [open, { toggle }] = useBoolean();

  const { List } = useShopCart();
  const style = useStyles();

  const dispatchError = use500Toast();

  const { run } = useRequest(Hub.Order.Post.New, {
    onFinally([req], data, e) {
      if (e) return dispatchError(e);
    },
    manual: true,
  })

  return <>
    <Button appearance="primary" onClick={toggle} disabled={!List.length}>Checkout</Button>

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
          Confirm Order
        </DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody>
        <div className={style.body}>
          <ConfirmPersona />

          <DelegateDataGrid Items={List} Columns={CartColumns} NoHeader />

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
