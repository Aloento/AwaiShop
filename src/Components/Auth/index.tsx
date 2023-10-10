import { Toast, ToastTitle, Toaster, useToastController } from "@fluentui/react-components";
import { WebStorageStateStore } from "oidc-client-ts";
import { ReactNode, useEffect } from "react";
import { AuthProvider, useAuth } from "react-oidc-context";
import { useRouter } from "../Router";

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.1.0
 */
export function OIDCProvider({ children }: { children: ReactNode }): ReactNode {
  const { Rep } = useRouter();

  return (
    <AuthProvider
      authority="https://keycloak.eco.tsi-dev.otc-service.com/realms/eco"
      client_id="loveotc"
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
 * @version 0.1.0
 */
function AuthHandler() {
  const auth = useAuth();
  const { dispatchToast } = useToastController();

  useEffect(() => {
    dispatchToast(
      <Toast>
        <ToastTitle>Comment Appended</ToastTitle>
      </Toast>,
      { intent: "success" }
    );
  }, []);

  return <Toaster pauseOnHover />;
}
