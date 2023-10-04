import { Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTrigger, Input, Subtitle2, makeStyles } from "@fluentui/react-components";
import { AddRegular } from "@fluentui/react-icons";
import { useState } from "react";
import { useRouter } from "~/Components/Router";
import { ColFlex } from "~/Helpers/Styles";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const useStyles = makeStyles({
  body: ColFlex
});

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.2.0
 */
export function AdminProductAddButton() {
  const { Paths } = useRouter();
  const path1 = Paths.at(0);
  const path2 = Paths.at(1);

  const style = useStyles();
  const [name, setName] = useState("");

  return (
    path1 === "Admin" && !path2 &&
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Button appearance="primary" icon={<AddRegular />}>New Product</Button>
      </DialogTrigger>

      <DialogSurface>
        <DialogBody>

          <DialogContent className={style.body}>
            <Input
              required
              size="large"
              value={name}
              appearance="underline"
              onChange={(_, v) => setName(v.value)}
              contentBefore={<Subtitle2>Give A Name</Subtitle2>}
            />
          </DialogContent>

          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Cancel</Button>
            </DialogTrigger>

            <Button appearance="primary">Create</Button>
          </DialogActions>

        </DialogBody>
      </DialogSurface>
    </Dialog>
  )
}
