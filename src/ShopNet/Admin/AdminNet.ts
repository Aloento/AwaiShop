import { HttpTransportType, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { MessagePackHubProtocol } from "@microsoft/signalr-protocol-msgpack";
import { accessTokenFactory } from "../ShopNet";

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.1.0
 */
export class AdminNet {
  public static readonly Hub = new HubConnectionBuilder()
    .withUrl(import.meta.env.DEV ? "https://localhost/AdminHub" : "/AdminHub",
      {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
        logMessageContent: import.meta.env.DEV,
        accessTokenFactory
      })
    .withAutomaticReconnect()
    .withHubProtocol(new MessagePackHubProtocol())
    .configureLogging(import.meta.env.DEV ? LogLevel.Debug : LogLevel.Information)
    .build();
}
