import { Button, Dialog, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Field, Image, Input, Toast, ToastTitle, makeStyles, tokens } from "@fluentui/react-components";
import { DismissRegular, EditRegular } from "@fluentui/react-icons";
import { useRequest } from "ahooks";
import { useState } from "react";
import { ColFlex, Cover, Flex } from "~/Helpers/Styles";
import { use500Toast } from "~/Helpers/useToast";
import { AdminHub } from "~/ShopNet/Admin";
import { IPhotoItem } from ".";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const useStyles = makeStyles({
  box: {
    ...Flex,
    columnGap: tokens.spacingHorizontalL
  },
  img: {
    ...Cover,
    aspectRatio: "1",
    width: "50%"
  },
  cap: {
    ...ColFlex,
    flexGrow: 1,
    rowGap: tokens.spacingVerticalL
  }
});

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.2.0
 */
export function AdminProductPhotoEdit({ Photo: { Id, Cover, Caption }, Refresh }: { Photo: IPhotoItem; Refresh: () => void; }) {
  const style = useStyles();
  const [cap, setCap] = useState(Caption || "");

  const { dispatchError, dispatchToast } = use500Toast();

  const { run: updateCaption } = useRequest(AdminHub.Product.Post.Caption, {
    manual: true,
    onFinally([req], _, e) {
      if (e)
        dispatchError({
          Message: "Failed Update Caption",
          Request: req,
          Error: e
        });

      dispatchToast(
        <Toast>
          <ToastTitle>Caption Updated</ToastTitle>
        </Toast>,
        { intent: "success" }
      );

      Refresh();
    },
  });

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
          <DialogTitle action={
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="subtle" icon={<DismissRegular />} />
            </DialogTrigger>
          }>
            Image Detail
          </DialogTitle>

          <DialogContent className={style.box}>
            <Image
              shape="rounded"
              className={style.img}
              src={Cover}
            />

            <div className={style.cap}>
              <Field label="Caption">
                <Input value={cap} onChange={(_, e) => setCap(e.value)} />
              </Field>

              <Button onClick={() => updateCaption(Id, cap)}>
                Save Caption
              </Button>

              <Button>Replace</Button>

              <Button appearance="primary">Delete</Button>
            </div>
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  )
}
