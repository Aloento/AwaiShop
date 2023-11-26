import { Toaster } from "@fluentui/react-components";
import { useMount } from "ahooks";
import { WebStorageStateStore } from "oidc-client-ts";
import { ReactNode, useEffect } from "react";
import { AuthProvider, hasAuthParams, useAuth } from "react-oidc-context";
import { use500Toast } from "~/Helpers/useToast";
import { Common } from "~/ShopNet/Database";
import { useRouter } from "../Router";

/**
 * @author Aloento
 * @since 1.0.0
 * @version 1.0.0
 */
export function OIDCProvider({ children }: { children: ReactNode }): ReactNode {
  const { Rep } = useRouter();

  return (
    <AuthProvider
      client_id="0ac3ee82-159d-407c-8539-7a9e1e3a1989"
      scope="openid offline_access profile email"
      userStore={new WebStorageStateStore({ store: window.localStorage })}
      onSigninCallback={() => {
        Rep("/");
        location.reload();
      }}
      authority="https://SoarCraft.b2clogin.com/SoarCraft.onmicrosoft.com/B2C_1_RegLog/v2.0"

      {...(import.meta.env.DEV ?
        {
          redirect_uri: "http://localhost:5173/Login",
          post_logout_redirect_uri: "http://localhost:5173/Logout",
        } :
        {
          redirect_uri: "https://awai.aloen.to/Login",
          post_logout_redirect_uri: "https://awai.aloen.to/Logout",
        }
      )}
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
  const auth = Common.AuthSlot = useAuth();
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
