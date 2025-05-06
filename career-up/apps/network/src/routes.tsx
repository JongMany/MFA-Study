import { type RouteObject } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { AppRoutingManager } from "@career-up/shell-router";
import Auth0ClientProvider from "./providers/auth0-client-provider";
import Layout from "./components/layout";
import PageHome from "./pages/page-home";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <RecoilRoot>
        <Auth0ClientProvider>
          <Layout>
            <AppRoutingManager type="app-network" />
          </Layout>
        </Auth0ClientProvider>
      </RecoilRoot>
    ),
    errorElement: <div>App Network Error</div>,
    children: [
      {
        index: true,
        element: <PageHome />,
      },
    ],
  },
];
