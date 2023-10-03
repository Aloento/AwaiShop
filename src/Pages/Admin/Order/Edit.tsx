import { Button, Field, Input, Label, makeStyles, tokens } from "@fluentui/react-components";
import { Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle } from "@fluentui/react-components/unstable";
import { DismissRegular, EditRegular, OpenRegular } from "@fluentui/react-icons";
import { useBoolean, useMount, useRequest } from "ahooks";
import { useRouter } from "~/Components/Router";
import { ColFlex, Flex } from "~/Helpers/Styles";
import { Hub } from "~/ShopNet";
import { AdminOrderAppend } from "./Append";
import { AdminOrderList } from "./List";
import { OrderPersona } from "./Persona";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const useStyles = makeStyles({
  body: {
    ...ColFlex,
    rowGap: tokens.spacingVerticalXL
  },
  close: {
    ...Flex,
    columnGap: tokens.spacingVerticalM
  }
});

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export function AdminOrderEdit({ OrderId }: { OrderId: number; }) {
  const style = useStyles();
  const [open, { toggle, setTrue }] = useBoolean();
  const { Nav, Paths } = useRouter();

  const { data, run } = useRequest(Hub.Order.Get.Detail, {
    onError() {
      throw Nav("/Admin/Order");
    },
    manual: true
  })

  useMount(() => {
    if (parseInt(Paths.at(2)!) === OrderId) {
      run(OrderId);
      setTrue();
    }
  });

  return <>
    <Button
      appearance="subtle"
      icon={<OpenRegular />}
      onClick={() => {
        Nav(`/Admin/Order/${OrderId}`);
        run(OrderId);
        setTrue();
      }}
    />

    <Drawer
      open={open}
      onOpenChange={toggle}
      position="end"
      size="medium"
      modalType="alert"
    >
      <DrawerHeader>
        <DrawerHeaderTitle action={
          <Button
            appearance="subtle"
            icon={<DismissRegular />}
            onClick={toggle}
          />}
        >
          Order Detail
        </DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody className={style.body}>
        <OrderPersona OrderId={OrderId} />

        <Field label="Required Products" size="large">
          <AdminOrderList Items={data?.ShopCart} />
        </Field>

        <Field label="Shipment" size="large">
          <Input
            appearance="underline"
            defaultValue="Number123456789"
            contentAfter={<Button appearance="subtle" icon={<EditRegular />} />}
          />
        </Field>

        <Field label="Comment" size="large">
          <Label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Label>
        </Field>

        <div className={style.close}>
          <Button appearance="primary">Force Close</Button>
        </div>

        <AdminOrderAppend OrderId={OrderId} Refresh={run} />
      </DrawerBody>
    </Drawer>
  </>
}
