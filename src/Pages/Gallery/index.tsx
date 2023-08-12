import { Body1, Card, CardFooter, CardPreview, makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { Cover, Flex } from "~/Helpers/Styles";

const useStyles = makeStyles({
  card: {
    marginTop: "10px",
    marginBottom: "10px",
    flexBasis: "23%",
    flexGrow: 0,
  },
  img: {
    aspectRatio: "1",
    ...Cover,
    ...shorthands.borderRadius(tokens.borderRadiusMedium)
  },
});

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */

class ProductInfo {
  imageUrl: string
  description: string
  constructor() {
    this.imageUrl = "https://source.unsplash.com/random";
    this.description = "No Description";
  }
}

export function Gallery() {
  const styles = useStyles();
  const cardList: ProductInfo[] = [
    {
      imageUrl: "https://source.unsplash.com/random",
      description: "Product 1"
    },
    {
      imageUrl: "https://source.unsplash.com/random",
      description: "Product 2"
    },
    {
      imageUrl: "https://source.unsplash.com/random",
      description: "Product 3"
    },
    {
      imageUrl: "https://source.unsplash.com/random",
      description: "Product 4"
    }
  ]
  return (
    <div style={{
      ...Flex,
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      columnGap: tokens.spacingVerticalL
    }}>
      {
        cardList.map((item) => (
          <Card className={styles.card}>
            <CardPreview>
              <img className={styles.img} src={item.imageUrl} />
            </CardPreview>

            <CardFooter>
              <Body1>
                {item.description}
              </Body1>
            </CardFooter>
          </Card>
        ))
      }

    </div>
  )
}
