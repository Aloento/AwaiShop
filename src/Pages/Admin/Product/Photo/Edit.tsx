import { Button, Dialog, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Field, Image, Input, makeStyles, tokens } from "@fluentui/react-components";
import { DismissRegular, EditRegular } from "@fluentui/react-icons";
import { ColFlex, Cover, Flex } from "~/Helpers/Styles";

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
export function AdminProductPhotoEdit({ PhotoId, Refresh }: { PhotoId: number; Refresh: () => void; }) {
  const style = useStyles();

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
              src={"https://picsum.photos/650"}
            />

            <div className={style.cap}>
              <Field label="Caption">
                <Input />
              </Field>

              <Button>Save Caption</Button>

              <Button>Replace</Button>

              <Button appearance="primary">Delete</Button>
            </div>
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  )
}
