import { createRoot } from "react-dom/client";
import { RouteObject, RouterProvider } from "react-router-dom";

import { createRouter } from "./router";
import { type RouterType } from "./types";

type InjectFactoryProps = {
  routes: RouteObject[];
};
type InjectProps = {
  rootElement: HTMLElement;
  basePath?: string;
  routerType: RouterType;
};

function injectFactory({ routes }: InjectFactoryProps) {
  return ({ rootElement, basePath, routerType }: InjectProps) => {
    const router = createRouter({ type: routerType, routes, basePath });

    const root = createRoot(rootElement!);
    root.render(<RouterProvider router={router} />);

    // unmount 함수
    return () => queueMicrotask(() => root.unmount());
  };
}

export default injectFactory;
