import { Button, Field, Label, Textarea, tokens } from "@fluentui/react-components";
import { Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle } from "@fluentui/react-components/unstable";
import { DismissRegular } from "@fluentui/react-icons";
import { useBoolean } from "ahooks";
import { ColFlex, Flex } from "~/Helpers/Styles";
import { DelegateDataGrid } from "../DelegateDataGrid";
import { CartColumns } from "./Columns";
import { useShopCart } from "./Context";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.2.0
 */
export function Confirm() {
  const [open, { toggle }] = useBoolean();
  const { List } = useShopCart();

  return <>
    <Button appearance="primary" onClick={toggle}>Checkout</Button>

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
        <div style={{
          ...ColFlex,
          rowGap: tokens.spacingVerticalL
        }}>
          <div style={Flex}>
            <div style={{
              ...ColFlex,
              flexBasis: "50%",
              rowGap: tokens.spacingVerticalM
            }}>
              <Field label="Name" size="large">
                <Label>Aloento</Label>
              </Field>
            </div>

            <div style={{
              ...ColFlex,
              flexBasis: "50%",
              rowGap: tokens.spacingVerticalM
            }}>
              <Field label="Phone" size="large">
                <Label>Aloento</Label>
              </Field>
            </div>
          </div>

          <Field label="Address" size="large">
            <Label>Some Address Address Address Address Address Address Address</Label>
          </Field>

          <DelegateDataGrid Items={List} Columns={CartColumns} NoHeader />

          <Field label="Comment" size="large">
            <Textarea />
          </Field>

          <Button appearance="primary" style={{
            width: "fit-content",
            alignSelf: "flex-end"
          }}>
            Submit
          </Button>
        </div>
      </DrawerBody>
    </Drawer>
  </>
}