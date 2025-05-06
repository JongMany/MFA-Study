import { type MyNetworkType } from "../types";
interface MyNetworkProps {
    myNetwork: MyNetworkType | null;
    fetchMyNetwork: () => Promise<void>;
}
declare const MyNetwork: ({ myNetwork, fetchMyNetwork }: MyNetworkProps) => import("react/jsx-runtime").JSX.Element | null;
export default MyNetwork;
