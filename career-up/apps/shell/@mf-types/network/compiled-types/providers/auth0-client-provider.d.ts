import React, { PropsWithChildren } from "react";
import { Auth0Client } from "@auth0/auth0-spa-js";
export declare const Auth0ClientContext: React.Context<Auth0Client | null>;
declare const Auth0ClientProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export default Auth0ClientProvider;
