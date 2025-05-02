type CreateRouterProps = {
    type: "browser" | "memory";
    basePath: string;
};
export declare const createRouter: ({ type, basePath }: CreateRouterProps) => import("react-router-dom").DataRouter;
export {};
