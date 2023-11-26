import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { ReactNode } from "react";

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.2.0
 */
export function WithAuth({ children }: { children: ReactNode }): ReactNode {
  const { inProgress } = useMsal();
  const auth = useIsAuthenticated();

  if (inProgress)
    return "Authenticating...";

  if (auth)
    return children;

  return null;
}

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.2.0
 */
export function WithoutAuth({ children }: { children: ReactNode }): ReactNode {
  const auth = useIsAuthenticated();

  if (auth)
    return null;

  return children;
}
