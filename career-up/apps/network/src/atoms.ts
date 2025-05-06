import { atom } from "recoil";
import { type MyNetworkType } from "./types";

export const myNetworkAtom = atom<MyNetworkType | null>({
  key: "my-network",
  default: null,
});
