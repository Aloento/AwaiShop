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
      extraTokenParams={{
        client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
        client_assertion: "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJlNzBjNmE1ZS0wMzgyLTQxNzAtOGE0Ny1iYzQyZmU4NWM0M2YifQ.eyJleHAiOjAsImlhdCI6MTY5Njk1NDIwNCwianRpIjoiYWZlNTMzMDYtNDdjZi00MTMwLWI5NDctYjU5MmNlNzNkNTRhIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5lY28udHNpLWRldi5vdGMtc2VydmljZS5jb20vcmVhbG1zL2VjbyIsImF1ZCI6Imh0dHBzOi8va2V5Y2xvYWsuZWNvLnRzaS1kZXYub3RjLXNlcnZpY2UuY29tL3JlYWxtcy9lY28iLCJ0eXAiOiJSZWdpc3RyYXRpb25BY2Nlc3NUb2tlbiIsInJlZ2lzdHJhdGlvbl9hdXRoIjoiYXV0aGVudGljYXRlZCJ9.ZxA92m0X0alA04Pwmh68-kAUCgoMAhqP3a6Eb26P-nA"
      }}
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
