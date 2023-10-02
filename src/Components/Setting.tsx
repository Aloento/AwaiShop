import { Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Field, Input, Label, makeStyles, tokens } from "@fluentui/react-components";
import { useRequest } from "ahooks";
import { useState } from "react";
import { ColFlex, Flex } from "~/Helpers/Styles";
import { Hub } from "~/ShopNet";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
interface ISetting {
  Open: boolean;
  Toggle: () => void;
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export const useStyles = makeStyles({
  box: {
    ...ColFlex,
    rowGap: tokens.spacingVerticalM
  },
  flex: Flex,
  one: {
    ...ColFlex,
    flexBasis: "50%",
    rowGap: tokens.spacingVerticalM
  },
  col: ColFlex,

});

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.2
 */
export function Setting({ Open, Toggle }: ISetting) {
  const style = useStyles();

  const [phone, setPhone] = useState<string>();
  const [address, setAddress] = useState<string>();

  const { data } = useRequest(Hub.User.Get.Me, {
    onSuccess({ Address, Phone }) {
      setPhone(Phone);
      setAddress(Address);
    }
  });

  return (
    <Dialog open={Open} onOpenChange={Toggle}>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Personal Information</DialogTitle>

          <DialogContent className={style.box}>
            <div className={style.flex}>
              <div className={style.one}>
                <Field label="Name" size="large">
                  <Label>{data?.Name}</Label>
                </Field>

                <Field label="E-Mail" size="large">
                  <Label>{data?.EMail}</Label>
                </Field>
              </div>

              <Field label="Phone" size="large" className={style.col}>
                <Input size="medium" value={phone} onChange={(_, v) => setPhone(v.value)} />
              </Field>
            </div>

            <Field label="Address" size="large">
              <Input size="medium" value={address} onChange={(_, v) => setAddress(v.value)} />
            </Field>
          </DialogContent>

          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Cancel</Button>
            </DialogTrigger>
            <Button appearance="primary">Submit</Button>
          </DialogActions>

        </DialogBody>
      </DialogSurface>
    </Dialog>
  )
}
