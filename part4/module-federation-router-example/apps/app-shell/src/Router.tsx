import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import { appJobsPrefix, appNetworkPrefix } from "./constants/prefix";
import React, { Suspense } from "react";

const AppJobsLazy = React.lazy(() => import("./components/AppJobs"));
const AppNetworkLazy = React.lazy(() => import("./components/AppNetwork"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={`/${appJobsPrefix}`} />,
      },
      {
        path: `/${appJobsPrefix}/*`,
        element: (
          <Suspense fallback={<div>Loading AppJobs...</div>}>
            <AppJobsLazy />
          </Suspense>
        ),
      },
      {
        path: `/${appNetworkPrefix}/*`,
        element: (
          <Suspense fallback={<div>Loading AppNetwork...</div>}>
            <AppNetworkLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
