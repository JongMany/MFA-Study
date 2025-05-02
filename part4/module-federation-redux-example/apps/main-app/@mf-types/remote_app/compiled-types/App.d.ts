import React, { PropsWithChildren } from "react";
import "./index.css";
import { Reducer, Store } from "@reduxjs/toolkit";
type RemoteAppWrapperProps = {
    store: Store;
    injectReducer: (key: string, asyncReducer: Reducer) => void;
};
declare const _default: React.MemoExoticComponent<({ store, injectReducer, }: PropsWithChildren<RemoteAppWrapperProps>) => import("react/jsx-runtime").JSX.Element>;
export default _default;
