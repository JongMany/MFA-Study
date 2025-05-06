interface ConnectionProps {
    name: string;
    picture: string | null;
    role: string;
    networkCount: number;
}
declare const Connection: ({ name, picture, role, networkCount }: ConnectionProps) => import("react/jsx-runtime").JSX.Element;
export default Connection;
