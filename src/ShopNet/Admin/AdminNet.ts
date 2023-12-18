import { HttpTransportType, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { MessagePackHubProtocol } from "@microsoft/signalr-protocol-msgpack";
import { Dayjs } from "dayjs";
import { Logger } from "~/Helpers/Logger";
import { AccessToken, IConcurrency } from "../Database";
import { SignalR } from "../SignalR";

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.1.1
 */
export abstract class AdminNet extends SignalR {
  protected static readonly Log = new Logger("AdminNet");

  /**
   * @author Aloento
   * @since 1.0.0
   * @version 0.1.2
   */
  public static readonly Hub = new HubConnectionBuilder()
    .withUrl(import.meta.env.DEV ? "https://localhost/AdminHub" : "https://awai.azurewebsites.net/AdminHub",
      {
        ...import.meta.env.DEV ? {
          skipNegotiation: true,
          transport: HttpTransportType.WebSockets,
        } : {},
        logMessageContent: import.meta.env.DEV,
        async accessTokenFactory() {
          const token = await AccessToken();
          if (token) return token;
          throw new Error("Please Login First");
        },
      })
    .withAutomaticReconnect()
    .withStatefulReconnect()
    .withHubProtocol(new MessagePackHubProtocol())
    .configureLogging(import.meta.env.DEV ? LogLevel.Debug : LogLevel.Information)
    .build();

  /**
   * @author Aloento
   * @since 1.0.0
   * @version 0.1.0
   */
  protected static override WithVersionCache<T extends IConcurrency>(
    key: string | number, methodName: string
  ): Promise<T | void> {
    return super.WithVersionCache(key, methodName, true);
  }

  /**
   * @author Aloento
   * @since 1.0.0
   * @version 0.1.0
   */
  protected static override WithTimeCache<T>(
    key: string | number, methodName: string, exp: Dayjs, ...args: any[]
  ): Promise<T> {
    return super.WithTimeCache(`Admin_${key}`, methodName, exp, ...args);
  }
}
