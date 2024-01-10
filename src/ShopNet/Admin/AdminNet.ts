import { HttpTransportType, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { MessagePackHubProtocol } from "@microsoft/signalr-protocol-msgpack";
import dayjs, { Dayjs } from "dayjs";
import { AccessToken, IConcurrency } from "../Database";
import { SignalR } from "../SignalR";

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.1.2
 */
export abstract class AdminNet extends SignalR {
  /** "|", "AdminNet" */
  protected static readonly Log = ["|", "AdminNet"];

  /**
   * @author Aloento
   * @since 1.0.0
   * @version 0.1.2
   */
  public static readonly Hub = new HubConnectionBuilder()
    .withUrl(import.meta.env.DEV ? "https://localhost/AdminHub" : "https://awaishop.aloen.to:3389/AdminHub",
      {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
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
   * @since 1.3.0
   * @version 0.1.0
   */
  protected static override UpdateCache<T>(
    action: (raw: T) => T, key: string | number, methodName: string, exp?: Dayjs
  ) {
    return super.UpdateCache(action, key, methodName, exp, true);
  }

  /**
   * @author Aloento
   * @since 1.0.0
   * @version 0.1.0
   */
  protected static override GetVersionCache<T extends IConcurrency>(
    key: string | number, methodName: string
  ): Promise<T> {
    return super.GetVersionCache(key, methodName, true);
  }

  /**
   * @author Aloento
   * @since 1.0.0
   * @version 0.1.1
   */
  protected static override GetTimeCache<T>(
    key: string | number, methodName: string, exp = dayjs().add(1, "m"), ...args: any[]
  ): Promise<T> {
    return super.GetTimeCache(`Admin_${key}`, methodName, exp, ...args);
  }
}
