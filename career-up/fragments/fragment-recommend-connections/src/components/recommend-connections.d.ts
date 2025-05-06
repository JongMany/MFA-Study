import "./recommend-connections.css";
import React from "react";
import { type ConnectionType } from "../types";
interface RecommendConnectionsProps {
    connections: ConnectionType[];
    fetchConnections: () => Promise<void>;
}
declare const RecommendConnections: React.FC<RecommendConnectionsProps>;
export default RecommendConnections;
