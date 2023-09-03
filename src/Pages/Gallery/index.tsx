import { Body1, Card, CardFooter, CardPreview, Image, Link, Title3, makeStyles, tokens } from "@fluentui/react-components";
import { useAsyncMemo } from "~/Helpers/AsyncMemo";
import { ColFlex, Cover, Flex } from "~/Helpers/Styles";
import { Hub } from "~/ShopNet";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
const useStyles = makeStyles({
  card: {
    flexBasis: "23%",
    flexGrow: 0,
  },
  img: {
    aspectRatio: "1",
    ...Cover,
    borderTopLeftRadius: tokens.borderRadiusMedium,
    borderTopRightRadius: tokens.borderRadiusMedium,
  },
  cate: {
    ...Flex,
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    columnGap: tokens.spacingVerticalL,
    rowGap: tokens.spacingVerticalXL
  },
  main: {
    ...ColFlex,
    rowGap: tokens.spacingVerticalXL
  }
});

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export interface ProductInfo {
  Image: string;
  Name: string;
}

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function Gallery() {
  const style = useStyles();
  const cates = useAsyncMemo(Hub.Gallery.Get.Categories(), [], []);

  return (
    <div className={style.main}>
      {
        cates.map(x => <GalleryCategory Category={x} />)
      }
    </div>
  )
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
function GalleryCategory({ Category }: { Category: string }) {
  const style = useStyles();
  const list = useAsyncMemo(Hub.Gallery.Get.Products(Category), [Category], [[], 0]);

  return <>
    <Title3>{Category}</Title3>

    <div className={style.cate}>
      {
        list[0].map(x => <GalleryCard Id={x} />)
          .concat(Array(list[1]).fill(<div className={style.card} />))
      }
    </div>
  </>
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
function GalleryCard({ Id }: { Id: number }) {
  const style = useStyles();
  const info = useAsyncMemo(Hub.Product.Get.Basic(Id), [Id])

  return (
    <Card className={style.card}>
      <CardPreview>
        <Image className={style.img} src={info?.Image} />
      </CardPreview>

      <CardFooter>
        <Body1>
          <Link href={`/Product/${Id}`}>{info?.Name}</Link>
        </Body1>
      </CardFooter>
    </Card>
  )
}
