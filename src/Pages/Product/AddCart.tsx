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
  const { List, Update } = useShopCart();
  const { Current } = useRadioGroup();

  const dis = useMemo(() => {
    let count = 0;

    for (const i of List) {
      if (i.ProdId === ProdId)
        count++;

      if (count >= Quantity)
        return true;
    }

    return false;
  }, [List, Limit, Quantity]);

  return <Button appearance="primary" disabled={dis}>ADD TO CART</Button>;
}
