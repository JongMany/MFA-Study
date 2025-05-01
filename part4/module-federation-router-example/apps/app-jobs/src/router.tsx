import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { routes } from "./routes";

type CreateRouterProps = {
  type: "browser" | "memory"; // 메모리 라우터
  basePath: string;
};
export const createRouter = ({ type, basePath }: CreateRouterProps) => {
  switch (type) {
    case "browser":
      return createBrowserRouter(routes, { basename: basePath });
    case "memory":
      return createMemoryRouter(routes, { initialEntries: [basePath ?? "/"] });
  }
};
