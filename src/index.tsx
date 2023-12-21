import { MsalProvider } from "@azure/msal-react";
import { FluentProvider, Toaster, webLightTheme } from "@fluentui/react-components";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "./Components/Router";
import { ShopCartContext } from "./Components/ShopCart/Context";
import { Dic } from "./Helpers/Dic";
import { Layout } from "./Pages";
import { MSAL } from "./ShopNet/Database";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.4.0
 */
ReactDOM.createRoot(document.getElementById(Dic.Name)!).render(
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
