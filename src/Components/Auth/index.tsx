import { Toaster } from "@fluentui/react-components";
import { useMount } from "ahooks";
import { WebStorageStateStore } from "oidc-client-ts";
import { ReactNode, useEffect } from "react";
import { AuthProvider, hasAuthParams, useAuth } from "react-oidc-context";
import { use500Toast } from "~/Helpers/useToast";
import { useRouter } from "../Router";

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.1.1
 */
export function OIDCProvider({ children }: { children: ReactNode }): ReactNode {
  const { Rep } = useRouter();

  return (
    <AuthProvider
      authority="https://keycloak.eco.tsi-dev.otc-service.com/realms/eco"
      client_id="loveotc"
      scope="openid profile email"
      redirect_uri="https://shop.eco.tsi-dev.otc-service.com/Login"
      post_logout_redirect_uri="https://shop.eco.tsi-dev.otc-service.com/Logout"
      userStore={new WebStorageStateStore({ store: window.localStorage })}
      onSigninCallback={() => Rep("/")}
    >
      <AuthHandler />
      {children}
    </AuthProvider>
  );
}

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.1.3
 */
function AuthHandler() {
  const auth = useAuth();
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
      dispatchError({
        Message: "Failed Authenticate",
        Request: auth,
        Error: auth.error
      });
    }
  }, [auth.error]);

  return <Toaster pauseOnHover />;
}
