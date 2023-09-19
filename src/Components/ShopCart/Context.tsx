import { createContext, useContext, useState } from "react";
import { ICartItem } from ".";

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
 * @version 0.1.0
 */
export function ShopCartContext({ List, children }: Omit<Context, "Update"> & { children: JSX.Element }) {
  const [list, setList] = useState(List);

  return (
    <ShopCart.Provider value={{
      List: list,
      Update(val) {
        setList([...val]);
      },
    }}>
      {children}
    </ShopCart.Provider>
  );
}
