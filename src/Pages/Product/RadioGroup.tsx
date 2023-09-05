import { Title3, ToggleButton, makeStyles, tokens } from "@fluentui/react-components";
import { useMemo, useState } from "react";
import { ColFlex, Flex } from "~/Helpers/Styles";
import { IComboItem } from "../Admin/Product/Combo";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
const useStyle = makeStyles({
  fore: {
    color: tokens.colorBrandForeground1
  },
  vari: {
    ...ColFlex,
    rowGap: tokens.spacingVerticalS,
  },
  radio: {
    ...Flex,
    flexWrap: "wrap",
    rowGap: tokens.spacingHorizontalS,
    columnGap: tokens.spacingHorizontalM
  }
})

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
interface IRadioGroup {
  Combos?: Omit<IComboItem, "Id">[];
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export function ProductRadioGroup({ Combos }: IRadioGroup) {
  if (!Combos)
    return null;

  const variants = useMemo(() => {
    const variant: Record<string, Set<string>> = {};

    for (const i of Combos)
      for (const c of i.Combo)
        if (variant.hasOwnProperty(c.Variant))
          variant[c.Variant].add(c.Type);
        else
          variant[c.Variant] = new Set([c.Type]);

    return variant;
  }, [Combos]);

  return (
    <VariRadio />
  );
}

function VariRadio() {
  const style = useStyle();
  const [curr, setCurr] = useState<number>();

  return <div className={style.vari}>
    <Title3 className={style.fore}>
      SELECT SLEEVE: SHORT SLEEVE
    </Title3>

    <div className={style.radio}>
      <ToggleButton appearance="outline" checked style={{ borderColor: tokens.colorBrandForeground1 }}>Short Sleeve</ToggleButton>
      <ToggleButton appearance="outline" style={{ borderColor: tokens.colorBrandForeground1 }}>Long Sleeve</ToggleButton>
    </div>
  </div>;
}
