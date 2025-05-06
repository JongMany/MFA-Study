import { PropsWithChildren } from "react";
import { center, left, wrapper } from "./layout.css";
import MyNetworkContainer from "../containers/my-network-container";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className={wrapper}>
      <div className={left}>
        <MyNetworkContainer />
      </div>
      <div className={center}>{children}</div>
    </div>
  );
}
