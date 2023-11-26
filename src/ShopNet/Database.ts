import { LogLevel, PublicClientApplication } from "@azure/msal-browser";
import Dexie from "dexie";
import { AuthContextProps } from "react-oidc-context";
import { ICartItem } from "~/Components/ShopCart";
import { Table } from "./Table";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const DB = new Dexie("EShop", { autoOpen: false });

/**
 * @author Aloento
 * @since 0.1.0 MusiLand
 * @version 0.2.0
 */
DB.version(1).stores({
  /** {@link ITable} */
  Shared: "Id, Exp",
  /** {@link ICartItem} */
  ShopCart: "Id",
});

DB.open();

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export const Shared = new Table(DB, "Shared");

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export const CartTable = DB.table<Omit<ICartItem, "Name" | "Cover">, never>("ShopCart");

/**
 * @author Aloento
 * @since 1.0.0
 * @version 1.0.0
 */
export abstract class Common {
  public static readonly MSAL = new PublicClientApplication({
    auth: {
      clientId: "0ac3ee82-159d-407c-8539-7a9e1e3a1989",
      authority: "https://login.microsoftonline.com/9ed42989-9bdb-439d-80e7-c709641d1f08",
      redirectUri: import.meta.env.DEV ? "http://localhost:5173/Login" : "https://awai.aloen.to/Login",
    },
    cache: {
      cacheLocation: "localStorage",
    },
    system: {
      loggerOptions: {
        loggerCallback: (level, message, containsPii) => {
          if (containsPii)
            return;

          switch (level) {
            case LogLevel.Error:
              console.error(message);
              return;
            case LogLevel.Info:
              console.info(message);
              return;
            case LogLevel.Verbose:
              console.debug(message);
              return;
            case LogLevel.Warning:
              console.warn(message);
              return;
            default:
              return;
          }
        }
      }
    }
  });

  public static get Auth(): Promise<AuthContextProps> {
    return new Promise<AuthContextProps>(resolve => {
      if (this.MSAL)
        return resolve(this.MSAL);

      const interval = setInterval(() => {
        if (this.MSAL) {
          clearInterval(interval);
          resolve(this.MSAL);
        }
      }, 100);
    });
  }

  public static async AccessToken(): Promise<string | void> {
    let { isAuthenticated, user, signinSilent } = await this.Auth;

    if (!isAuthenticated)
      user = await signinSilent();

    if (user)
      return user.access_token;
  }
}

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.2.0
 */
export interface IConcurrency {
  Version: Uint8Array;
}
