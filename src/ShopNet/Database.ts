import { LogLevel, PublicClientApplication } from "@azure/msal-browser";
import Dexie from "dexie";
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
 * @version 0.1.0
 */
export const MSAL = new PublicClientApplication({
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
      loggerCallback(level, message, containsPii) {
        if (containsPii)
          return;

        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          default:
            console.trace(message);
        }
      }
    }
  }
});

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.1.0
 */
export async function AccessToken(): Promise<string | void> {
  try {
    const token = await MSAL.acquireTokenSilent({ scopes: [] });
    return token.idToken;
  } catch (e) {
    console.warn(e);
  }
}

await MSAL.initialize();
await MSAL.handleRedirectPromise();
MSAL.setActiveAccount(MSAL.getAllAccounts()[0])

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.2.0
 */
export interface IConcurrency {
  Version: Uint8Array;
}
