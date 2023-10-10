import { WebStorageStateStore } from "oidc-client-ts";
import { AuthProvider } from "react-oidc-context";
import { useRouter } from "../Router";

/**
 * @author Aloento
 * @since 1.0.0
 * @version 0.1.0
 */
export function OIDCProvider({ children }: { children: JSX.Element }): JSX.Element {
  const { Rep } = useRouter();

  return (
    <AuthProvider
      authority="https://keycloak.eco.tsi-dev.otc-service.com/realms/eco"
      client_id="loveotc"
      redirect_uri="https://shop.eco.tsi-dev.otc-service.com/oauth2/callback"
      userStore={new WebStorageStateStore({ store: window.localStorage })}
      onSigninCallback={() => Rep("/")}
    >
      {children}
    </AuthProvider>
  );
}
