import type { HubConnection } from "@microsoft/signalr";
import type { Logger } from "~/Helpers/Logger";

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.2.0
 */
export interface INet {
  Log: Logger;
  Hub: HubConnection;

  EnsureConnected: () => Promise<void>;
  Invoke: <T>(methodName: string, ...args: any[]) => Promise<T>;
}
