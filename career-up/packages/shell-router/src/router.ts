import { type CreateRouterProps } from "./types";
import { createBrowserRouter, createMemoryRouter } from "react-router-dom";

type Router =
  | ReturnType<typeof createBrowserRouter>
  | ReturnType<typeof createMemoryRouter>;

export const createRouter = ({
  type,
  routes,
  basePath,
}: CreateRouterProps): Router => {
  switch (type) {
    case "browser":
      return createBrowserRouter(routes);
    case "memory":
      return createMemoryRouter(routes, {
        initialEntries: [basePath || "/"],
      });
  }
};
