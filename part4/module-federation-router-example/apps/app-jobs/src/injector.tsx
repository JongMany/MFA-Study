import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./router";

type InjectProps = {
  routerType: "browser" | "memory"; // 메모리 라우터
  rootElement: HTMLElement;
  basePath?: string;
};
export const inject = ({
  routerType,
  rootElement,
  basePath = "/",
}: InjectProps) => {
  const router = createRouter({
    type: routerType,
    basePath,
  });

  const root = createRoot(rootElement);
  root.render(<RouterProvider router={router} />);

  return () => {
    queueMicrotask(() => {
      root.unmount();
    });
  };
};
