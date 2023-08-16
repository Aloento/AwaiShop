import { Button } from "@fluentui/react-components";
import { Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle } from "@fluentui/react-components/unstable";
import { DismissRegular } from "@fluentui/react-icons";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function AdminProductEdit({ Open, Toggle }: { Open: boolean; Toggle: () => void }) {

  return (
    <Drawer
      open={Open}
      onOpenChange={Toggle}
      position="right"
      size="medium"
      modalType="alert"
    >
      <DrawerHeader>
        <DrawerHeaderTitle action={
          <Button
            appearance="subtle"
            icon={<DismissRegular />}
            onClick={Toggle}
          />}
        >
          Product Detail
        </DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody>

      </DrawerBody>
    </Drawer>
  )
}