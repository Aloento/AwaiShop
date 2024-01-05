import { SkeletonItem, Title3, ToggleButton, makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { useRequest } from "ahooks";
import { useState } from "react";
import { Logger } from "~/Helpers/Logger";
import { ColFlex, Flex } from "~/Helpers/Styles";
import { Hub } from "~/ShopNet";
import { useRadioGroup } from "./Context";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
const useStyle = makeStyles({
  fore: {
    color: tokens.colorBrandForeground1,
    textTransform: "uppercase"
  },
  btn: shorthands.borderColor(tokens.colorBrandForeground1),
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

const log = new Logger("Product", "RadioGroup");

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.5.0
 */
export function ProductRadioList({ ProdId }: { ProdId: number }) {
  const { Update, SetAll } = useRadioGroup();
  const [variants, setVariants] = useState<[string, string[]][]>([]);

  const { loading } = useRequest(() => Hub.Product.Get.Combo(ProdId, log), {
    onError: log.error,
    onSuccess(data) {
      const variant: Record<string, Set<string>> = {};

      for (const i of data)
        for (const [vari, type] of Object.entries(i.Combo))
          if (variant.hasOwnProperty(vari))
            variant[vari].add(type);
          else
            variant[vari] = new Set([type]);

      SetAll(data);
      Update(data[0].Combo);
      setVariants(Object.entries(variant).map(([val, type]) => [val, Array.from(type)]));
    }
  });

  if (loading)
    return <SkeletonItem size={72} />;

  return variants.map(([val, type], i) => <VariRadioGroup key={i} Variant={val} Types={type} />);
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.1
 */
interface IVariRadioGroup {
  Variant: string;
  Types: string[];
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.2.2
 */
function VariRadioGroup({ Variant, Types }: IVariRadioGroup) {
  const style = useStyle();
  const { Current, Update } = useRadioGroup();

  return (
    <div className={style.vari}>
      <Title3 className={style.fore}>
        SELECT {Variant}: {Current[Variant]}
      </Title3>

      <div className={style.radio}>
        {Types.map((val, i) =>
          <ToggleButton
            key={i}
            appearance="outline"
            className={style.btn}
            checked={Current[Variant] === val}
            onClick={() => Update({
              ...Current,
              [Variant]: val
            })}
          >
            {val}
          </ToggleButton>)}
      </div>
    </div>
  );
}
