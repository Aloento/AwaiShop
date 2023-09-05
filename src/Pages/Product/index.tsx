import { Button, Divider, Field, LargeTitle, SpinButton, Title3, makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { useRequest } from "ahooks";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from "~/Components/Router";
import { BaseCard, Col, ColFlex, Cover, Flex } from "~/Helpers/Styles";
import { Lexical } from "~/Lexical";
import { Hub } from "~/ShopNet";
import { IComboItem } from "../Admin/Product/Combo";
import { ProductRadioGroup } from "./RadioGroup";
import demo from "./demo.json";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
const useStyle = makeStyles({
  main: ColFlex,
  img: {
    aspectRatio: "1",
    ...Cover,
    ...shorthands.borderRadius(tokens.borderRadiusMedium)
  },
  info: {
    ...Flex,
    columnGap: tokens.spacingHorizontalXXXL
  },
  detail: {
    ...BaseCard,
    ...Col,
    height: "fit-content",
    flexBasis: "50%",
    flexShrink: 0,
    rowGap: tokens.spacingVerticalXL,
    paddingTop: tokens.spacingVerticalM,
    paddingLeft: tokens.spacingHorizontalXXL,
    paddingRight: tokens.spacingHorizontalXXL,
    paddingBottom: tokens.spacingHorizontalXXL
  },
  fore: {
    color: tokens.colorBrandForeground1
  },
})

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export interface IProduct {
  Name: string;
  Limit?: number;
  Combos: Omit<IComboItem, "Id">[];
}

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function Product() {
  const style = useStyle();
  const { Nav, Paths } = useRouter();
  const id = parseInt(Paths.at(1)!);

  const { data } = useRequest(Hub.Product.Get.Detail, {
    defaultParams: [id],
    onBefore() {
      isNaN(id) && Nav("/");
    },
    onError() {
      throw Nav("/");
    }
  });

  return (
    <div className={style.main}>
      <div className={style.info}>
        <Gallery Id={id} />

        <div className={style.detail}>
          <LargeTitle className={style.fore}>
            OTC SHIRT - GREY
          </LargeTitle>

          <Divider />

          <ProductRadioGroup Combos={data?.Combos} />

          <Divider />

          <div style={{
            ...ColFlex,
            rowGap: tokens.spacingVerticalS,
          }}>
            <Title3 className={style.fore}>
              QUANTITY
            </Title3>

            <div style={{
              ...Flex,
              justifyContent: "space-between",
              columnGap: tokens.spacingHorizontalM
            }}>
              <Field>
                <SpinButton appearance="underline" defaultValue={1} />
              </Field>

              <Button appearance="primary">ADD TO CART</Button>
            </div>
          </div>

        </div>
      </div>

      <div style={{
        ...BaseCard,
        padding: tokens.spacingHorizontalXL
      }}>
        <Lexical Display State={JSON.stringify(demo.editorState)} />
      </div>
    </div>
  )
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
function Gallery({ Id }: { Id: number }) {
  const style = useStyle();
  const { data } = useRequest(Hub.Product.Get.Carousel, {
    defaultParams: [Id]
  });

  return (
    <Carousel showArrows>
      {
        data?.map(val => <img className={style.img} src={val} />)
      }
    </Carousel>
  );
}
