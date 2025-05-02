import { useEffect } from "react";
import {
  matchRoutes,
  Navigate,
  Outlet,
  RouteObject,
  useLocation,
  useNavigate,
} from "react-router-dom";

const RoutingManager = () => {
  // app-shell과의 통신에 대한 내용을 관리
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const shellNavigationHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      if (location.pathname === pathname || !matchRoutes(routes, pathname)) {
        return;
      }
      navigate(pathname);
    };

    window.addEventListener("[app-shell] navigated", shellNavigationHandler);

    return () => {
      window.removeEventListener(
        "[app-shell] navigated",
        shellNavigationHandler
      );
    };
  }, [location]);

  useEffect(() => {
    // app-jobs의 변경을 외부에 알림
    window.dispatchEvent(
      new CustomEvent("[app-network] navigated", {
        detail: location.pathname,
      })
    );
  }, [location]);

  return <Outlet />;
};

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RoutingManager />,
    children: [
      {
        index: true,
        element: <Navigate to={"/a"} />,
      },
      {
        path: "a",
        element: <div>App Network Page A</div>,
      },
      {
        path: "b",
        element: <div>App Network Page B</div>,
      },
    ],
  },
];
