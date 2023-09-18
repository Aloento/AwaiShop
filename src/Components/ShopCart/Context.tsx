import { createContext, useContext } from "react";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
interface Context {

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
export function ShopCartContext({ children, ...props }: Context & { children: JSX.Element }) {

}
