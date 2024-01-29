import { LogLevel, PublicClientApplication } from "@azure/msal-browser";
import Dexie from "dexie";
import { ICartItem } from "~/Components/ShopCart";
import { Dic } from "~/Helpers/Dic";
import { Table } from "./Table";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const DB = new Dexie(Dic.Name, { autoOpen: false });

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
 * @version 0.1.2
 */
export const MSAL = new PublicClientApplication({
  auth: {
    clientId: "0ac3ee82-159d-407c-8539-7a9e1e3a1989",
    authority: "https://SoarCraft.b2clogin.com/SoarCraft.onmicrosoft.com/B2C_1_RegLog",
    knownAuthorities: ["SoarCraft.b2clogin.com"],
    redirectUri: import.meta.env.DEV ? "http://localhost:5173/Login" : "https://awai.aloen.to/Login",
  },
  cache: {
    cacheLocation: "localStorage",
  },
  system: {
    loggerOptions: {
      loggerCallback(level, message) {
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            console.debug(message);
        }
      }
    }
  }
});

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.1.1
 */
export async function AccessToken(): Promise<string | void> {
  try {
    const token = await MSAL.acquireTokenSilent({ scopes: [] });
    return token.idToken;
  } catch (e) {
    if (MSAL.getActiveAccount())
      await MSAL.loginRedirect();

    console.warn(e);
  }
}

await MSAL.initialize();
await MSAL.handleRedirectPromise();
MSAL.setActiveAccount(MSAL.getAllAccounts()[0])

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.1.0
 */
export interface IConcurrency {
  Version: number;
}
