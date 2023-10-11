import { Toast, ToastTitle, Toaster } from "@fluentui/react-components";
import { WebStorageStateStore } from "oidc-client-ts";
import { ReactNode, useEffect } from "react";
import { AuthProvider, useAuth } from "react-oidc-context";
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
      scope="openid profile email loveotc"
      redirect_uri="https://shop.eco.tsi-dev.otc-service.com/oauth2/callback"
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
 * @version 0.1.2
 */
function AuthHandler() {
  const auth = useAuth();
  const { dispatchError, dispatchToast } = use500Toast();

  useEffect(() => {
    if (auth.error) {
      dispatchError({
        Message: "Failed Authenticate",
        Request: auth,
        Error: auth.error
      });
    }
  }, [auth.error]);

  useEffect(() => {
    if (auth.activeNavigator) {
      dispatchToast(
        <Toast>
          <ToastTitle>{auth.activeNavigator}</ToastTitle>
        </Toast>
      );
    }
  }, [auth.activeNavigator]);

  return <Toaster pauseOnHover />;
}
