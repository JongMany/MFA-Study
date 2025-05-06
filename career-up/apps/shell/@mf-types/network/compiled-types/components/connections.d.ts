import { type ConnectionType } from "../types";
interface ConnectionsProps {
    connections: ConnectionType[];
    fetchConnections: () => Promise<void>;
}
declare const Connections: ({ connections, fetchConnections }: ConnectionsProps) => import("react/jsx-runtime").JSX.Element;
export default Connections;
