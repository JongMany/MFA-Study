type InjectProps = {
    routerType: "browser" | "memory";
    rootElement: HTMLElement;
    basePath?: string;
};
export declare const inject: ({ routerType, rootElement, basePath, }: InjectProps) => () => void;
export {};
