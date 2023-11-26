import { MsalProvider, useMsal } from "@azure/msal-react";
import { Toaster } from "@fluentui/react-components";
import { useMount } from "ahooks";
import { ReactNode, useEffect } from "react";
import { hasAuthParams } from "react-oidc-context";
import { use500Toast } from "~/Helpers/useToast";
import { Common } from "~/ShopNet/Database";
import { useRouter } from "../Router";

/**
 * @author Aloento
 * @since 1.0.0
 * @version 1.0.0
 */
export function OIDCProvider({ children }: { children: ReactNode }): ReactNode {
  return (
    <MsalProvider instance={Common.MSAL}>
      <AuthHandler />
      {children}
    </MsalProvider>
  );
}

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.1.3
 */
function AuthHandler() {
  const auth = useMsal();
  const { Paths, Rep } = useRouter();
  const { dispatchError } = use500Toast();

  useMount(() => {
    if (Paths.at(0) === "Logout") {
      auth.removeUser();
      return Rep("/");
    }

    if (
      !hasAuthParams() &&
      !auth.isAuthenticated &&
      !auth.activeNavigator &&
      !auth.isLoading
    ) {
      auth.signinRedirect();
    }
  });

  useEffect(() => {
    if (auth.error) {
      return dispatchError({
        Message: "Failed Authenticate",
        Request: auth,
        Error: auth.error
      });
    }
  }, [auth.error]);

  return <Toaster pauseOnHover />;
}
