import { HttpTransportType, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { MessagePackHubProtocol } from "@microsoft/signalr-protocol-msgpack";
import { User as OIDCUser } from "oidc-client-ts";
import { Gallery } from "./Gallery";
import { Order } from "./Order";
import { Product } from "./Product";
import { User } from "./User";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.1
 */
export const Hub = {
  Gallery: Gallery,
  Product: Product,
  User: User,
  Order: Order,
}

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.1.0
 */
export class ShopNet {
  public static readonly Hub = new HubConnectionBuilder()
    .withUrl("/Hub", {
      skipNegotiation: true,
      transport: HttpTransportType.WebSockets,
      logMessageContent: import.meta.env.DEV,
      accessTokenFactory() {
        const oidc = localStorage.getItem(
          import.meta.env.DEV
            ? "oidc.user:http://localhost:8080/realms/loveotc:loveotc"
            : "oidc.user:https://keycloak.eco.tsi-dev.otc-service.com/realms/eco:loveotc"
        );

        if (oidc) {
          const user = OIDCUser.fromStorageString(oidc);
          return user.access_token;
        }

        return "";
      },
    })
    .withAutomaticReconnect()
    .withHubProtocol(new MessagePackHubProtocol())
    .configureLogging(import.meta.env.DEV ? LogLevel.Debug : LogLevel.Information)
    .build();
}
