import { Button, Input, Subtitle2, Toast, ToastTitle, makeStyles, tokens } from "@fluentui/react-components";
import { Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle } from "@fluentui/react-components/unstable";
import { DismissRegular, EditRegular, OpenRegular, SendRegular } from "@fluentui/react-icons";
import { useBoolean, useRequest } from "ahooks";
import { useState } from "react";
import { ColFlex } from "~/Helpers/Styles";
import { use500Toast } from "~/Helpers/useToast";
import { AdminHub } from "~/ShopNet/Admin";
import { AdminProductCombo } from "./Combo";
import { AdminProductPhoto } from "./Photo";
import { AdminProductVariant } from "./Variant";

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
});

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.2.0
 */
export function AdminProductDetail({ ProdId }: { ProdId: number }) {
  const style = useStyles();
  const [name, setName] = useState("");

  const [edit, { setTrue, setFalse }] = useBoolean();
  const [open, { toggle }] = useBoolean();

  useRequest(AdminHub.Product.Get.Name, {
    defaultParams: [ProdId],
    onSuccess(data) {
      setName(data);
    },
  })

  const { dispatchError, dispatchToast } = use500Toast();

  const { run } = useRequest(AdminHub.Product.Post.Name, {
    manual: true,
    onFinally([req], _, e) {
      if (e)
        dispatchError({
          Message: "Failed Update Name",
          Request: req,
          Error: e
        });

      dispatchToast(
        <Toast>
          <ToastTitle>Name Updated</ToastTitle>
        </Toast>,
        { intent: "success" }
      );

      setFalse();
    },
  });

  return <>
    <Button
      appearance="subtle"
      icon={<OpenRegular />}
      onClick={toggle}
    />

    <Drawer
      open={open}
      onOpenChange={toggle}
      position="end"
      size="large"
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
          Product Detail
        </DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody className={style.body}>
        <Input
          size="large"
          value={name}
          disabled={!edit}
          appearance="underline"
          onChange={(_, v) => setName(v.value)}
          contentBefore={<Subtitle2>Name</Subtitle2>}
          contentAfter={edit
            ? <Button appearance="subtle" icon={<SendRegular />} onClick={() => run(ProdId, name)} />
            : <Button appearance="subtle" icon={<EditRegular />} onClick={setTrue} />}
        />

        <AdminProductPhoto ProdId={ProdId} />
        <AdminProductVariant ProdId={ProdId} />
        <AdminProductCombo ProdId={ProdId} />
      </DrawerBody>
    </Drawer>
  </>
}
