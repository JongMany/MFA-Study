declare const inject: ({ rootElement, basePath, routerType }: {
    rootElement: HTMLElement;
    basePath?: string;
    routerType: import("@career-up/shell-router").RouterType;
}) => () => void;
export default inject;
