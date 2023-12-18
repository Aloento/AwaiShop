import { HttpTransportType, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { MessagePackHubProtocol } from "@microsoft/signalr-protocol-msgpack";
import { OnNewUserSubject } from "~/Components/NewUser";
import { Logger } from "~/Helpers/Logger";
import { AccessToken } from "./Database";
import { SignalR } from "./SignalR";

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.1.2
 */
export abstract class ShopNet extends SignalR {
  protected static readonly Log = new Logger("ShopNet");

  /**
   * @author Aloento
   * @since 1.0.0
   * @version 0.1.2
   */
  public static readonly Hub = new HubConnectionBuilder()
    .withUrl(import.meta.env.DEV ? "https://localhost/Hub" : "https://awai.azurewebsites.net/Hub",
      {
        ...import.meta.env.DEV ? {
          skipNegotiation: true,
          transport: HttpTransportType.WebSockets,
        } : {},
        logMessageContent: import.meta.env.DEV,
        async accessTokenFactory() {
          const token = await AccessToken();
          if (token) return token;
          return "";
        },
      })
    .withAutomaticReconnect()
    .withStatefulReconnect()
    .withHubProtocol(new MessagePackHubProtocol())
    .configureLogging(import.meta.env.DEV ? LogLevel.Debug : LogLevel.Information)
    .build();
}

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.1.1
 */
ShopNet.Hub.on("OnNewUser", () => {
  OnNewUserSubject.next(true);
  console.debug("OnNewUser");
});
