import { Button, Input, Subtitle2, makeStyles, tokens } from "@fluentui/react-components";
import { Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle } from "@fluentui/react-components/unstable";
import { DismissRegular, EditRegular, OpenRegular } from "@fluentui/react-icons";
import { useBoolean } from "ahooks";
import { ColFlex } from "~/Helpers/Styles";
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
  const [open, { toggle }] = useBoolean();

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
          appearance="underline"
          defaultValue="OTC SHIRT - GREY"
          contentBefore={<Subtitle2>Name</Subtitle2>}
          contentAfter={<Button appearance="subtle" icon={<EditRegular />} />}
        />

        <AdminProductPhoto />
        <AdminProductVariant />
        <AdminProductCombo />
      </DrawerBody>
    </Drawer>
  </>
}
