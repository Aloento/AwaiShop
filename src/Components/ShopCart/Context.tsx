import { useRequest } from "ahooks";
import { random } from "lodash-es";
import { createContext, useContext, useState } from "react";
import { CartTable } from "~/ShopNet/Database";
import { ICartItem } from ".";

const items: ICartItem[] = [
  {
    Id: 1,
    ProdId: random(1, 10),
    Image: "https://picsum.photos/550",
    Name: "OTC SHIRT - GREY",
    Type: {
      Color: "White",
      Size: "S"
    },
    Quantity: 1
  },
  {
    Id: 2,
    ProdId: random(1, 10),
    Image: "https://picsum.photos/600",
    Name: "OTC Cap - Cap and Cap",
    Type: {
      Color: "Red",
      Size: "Long and Long"
    },
    Quantity: 1
  }
]

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
interface Context {
  List: ICartItem[];
  Update: (val: ICartItem[]) => void;
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const ShopCart = createContext({} as Context);

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export function useShopCart() {
  return useContext(ShopCart);
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.2.0
 */
export function ShopCartContext({ children }: { children: JSX.Element }) {
  const [list, setList] = useState<ICartItem[]>([]);

  useRequest(async () => {
    const arr = await CartTable.toArray();
    setList(arr);
  });

  return (
    <ShopCart.Provider value={{
      List: list,
      async Update(val) {
        for (let i = 0; i < val.length; i++)
          val[i].Id = i;

        setList([...val]);
        await CartTable.clear();
        await CartTable.bulkAdd(val);
      },
    }}>
      {children}
    </ShopCart.Provider>
  );
}
