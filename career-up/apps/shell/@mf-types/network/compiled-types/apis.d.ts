import { type ConnectionType, type MyNetworkType } from "./types";
export declare function getMyNetwork(token: string): Promise<MyNetworkType>;
export declare function getConnections(token: string): Promise<ConnectionType[]>;
