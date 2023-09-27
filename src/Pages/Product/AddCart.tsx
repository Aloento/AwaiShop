import { Button } from "@fluentui/react-components";
import { useMemo } from "react";
import { useShopCart } from "~/Components/ShopCart/Context";
import { useRadioGroup } from "./Context";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
interface IProductAddCart {
  ProdId: number;
  Limit: number;
  Quantity: number;
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export function ProductAddCart({ ProdId, Limit, Quantity }: IProductAddCart) {
  const { List, Add, Update } = useShopCart();
  const { Current } = useRadioGroup();

  const dis = useMemo(() => {
    let count = 0;

    for (const i of List) {
      if (i.ProdId === ProdId)
        count += i.Quantity;

      if (count >= Limit)
        return true;
    }

    return false;
  }, [List, Limit, Quantity]);

  return (
    <Button
      appearance="primary"
      disabled={dis}
      onClick={() => {
        const i = List.find(v => {
          if (v.ProdId === ProdId) {
            const source = Object.keys(Current).sort();
            const target = Object.keys(v.Type).sort();

            for (let i = 0; i < target.length; i++) {
              const s = Current[source[i]];
              const t = v.Type[target[i]];

              if (s !== t)
                return false;
            }

            return true;
          }

          return false;
        });

        if (!i) {
          Add(ProdId, Current, Quantity);
          return;
        }

        i.Quantity++;
        Update(List);
      }}
    >
      ADD TO CART
    </Button>
  );
}
