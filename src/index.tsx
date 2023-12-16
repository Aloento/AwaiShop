import { MsalProvider } from "@azure/msal-react";
import { FluentProvider, Toaster, webLightTheme } from "@fluentui/react-components";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "./Components/Router";
import { ShopCartContext } from "./Components/ShopCart/Context";
import { Logger } from "./Helpers/Logger";
import { Layout } from "./Pages";
import { MSAL } from "./ShopNet/Database";

var a = new Logger("AwaiShop");
a.error("Error");
a.warn("Warning");
a.info("Info");
a.debug("Debug");

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.4.0
 */
ReactDOM.createRoot(document.getElementById("AwaiShop")!).render(
  <FluentProvider theme={webLightTheme}>
    <BrowserRouter>
      <MsalProvider instance={MSAL}>
        <ShopCartContext>
          <Toaster pauseOnHover />
          <Layout />
        </ShopCartContext>
      </MsalProvider>
    </BrowserRouter>
  </FluentProvider>
);
