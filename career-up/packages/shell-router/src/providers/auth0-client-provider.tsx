import { createContext, PropsWithChildren } from "react";
import { Auth0Client } from "@auth0/auth0-spa-js";

export const Auth0ClientContext = createContext<Auth0Client | null>(null);

type Auth0ClientProviderProps = PropsWithChildren<{
  options: {
    domain: string;
    clientId: string;
    redirectUri: string;
  };
}>;

const Auth0ClientProvider = ({
  options: { domain, clientId, redirectUri },
  children,
}: Auth0ClientProviderProps) => {
  const auth0Client = new Auth0Client({
    domain,
    clientId,
    authorizationParams: {
      redirect_uri: redirectUri,
    },
  });

  return (
    <Auth0ClientContext.Provider value={auth0Client}>
      {children}
    </Auth0ClientContext.Provider>
  );
};

export default Auth0ClientProvider;
