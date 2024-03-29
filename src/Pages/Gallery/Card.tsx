import { Card, CardFooter, CardPreview, Link, Subtitle2, makeStyles, tokens } from "@fluentui/react-components";
import { useRequest } from "ahooks";
import { GuidImage } from "~/Helpers/GuidImage";
import { Logger } from "~/Helpers/Logger";
import { Cover } from "~/Helpers/Styles";
import { Hub } from "~/ShopNet";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.2.0
 */
const useStyles = makeStyles({
  img: {
    aspectRatio: "1",
    ...Cover,
    borderTopLeftRadius: tokens.borderRadiusMedium,
    borderTopRightRadius: tokens.borderRadiusMedium,
  },
  fore: {
    color: tokens.colorBrandForegroundLink
  }
});

const log = new Logger("Gallery", "Category", "Card");

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.2.0
 */
export function GalleryCard({ Id }: { Id: number }) {
  const style = useStyles();
  const { data } = useRequest(() => Hub.Product.Get.Basic(Id, log), {
    onError: log.error
  });

  return (
    <Link href={`/Product/${Id}`}>
      <Card>
        <CardPreview>
          <GuidImage className={style.img} Guid={data?.Cover} ParentLog={log} />
        </CardPreview>

        <CardFooter>
          <Subtitle2 className={style.fore}>
            {data?.Name || "Loading..."}
          </Subtitle2>
        </CardFooter>
      </Card>
    </Link>
  )
}
