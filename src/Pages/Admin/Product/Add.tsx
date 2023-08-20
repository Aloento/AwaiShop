import { Button, Dialog, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Image, tokens } from "@fluentui/react-components";
import { EditRegular } from "@fluentui/react-icons";
import { Flex } from "~/Helpers/Styles";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export function AdminProductPhotoEdit() {
  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Button
          appearance="subtle"
          icon={<EditRegular />}
        />
      </DialogTrigger>

      <DialogSurface>
        <DialogBody>
          <DialogTitle>Image Detail</DialogTitle>

          <DialogContent style={{
            ...Flex,
            columnGap: tokens.spacingHorizontalL
          }}>
            <Image />

          </DialogContent>

        </DialogBody>
      </DialogSurface>
    </Dialog>
  )
}
