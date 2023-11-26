import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import ReactDOM from "react-dom/client";
import { OIDCProvider } from "./Components/Auth";
import { BrowserRouter } from "./Components/Router";
import { ShopCartContext } from "./Components/ShopCart/Context";
import { Layout } from "./Pages";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.3.0
 */
ReactDOM.createRoot(document.getElementById("AwaiShop")!).render(
  <FluentProvider theme={webLightTheme}>
    <BrowserRouter>
      <OIDCProvider>
        <ShopCartContext>
          <Layout />
        </ShopCartContext>
      </OIDCProvider>
    </BrowserRouter>
  </FluentProvider>
);
