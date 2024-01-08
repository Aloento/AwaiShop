import { Skeleton, SkeletonItem, makeStyles, mergeClasses, shorthands, tokens } from "@fluentui/react-components";
import { useRequest } from "ahooks";
import { random } from "lodash-es";
import { BaseCard, ColFlex } from "~/Helpers/Styles";
import { Lexical } from "~/Lexical";
import { Hub } from "~/ShopNet";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.1
 */
const useStyle = makeStyles({
  lex: {
    ...BaseCard,
    ...shorthands.padding(tokens.spacingHorizontalXL)
  },
  skel: {
    ...ColFlex,
    rowGap: tokens.spacingVerticalM
  }
})

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.2.0
 */
export function ProductLexicalRender({ ProdId }: { ProdId: number }) {
  const style = useStyle();
  const { data, loading } = useRequest(() => Hub.Product.Get.Lexical(ProdId));

  return loading
    ?
    <Skeleton className={mergeClasses(style.lex, style.skel)}>
      {Array.from({ length: random(3, 9) }).map((_, i) => <SkeletonItem key={i} size={20} />)}
    </Skeleton>
    :
    <div className={style.lex}>
      <Lexical Display State={data} />
    </div>
}
