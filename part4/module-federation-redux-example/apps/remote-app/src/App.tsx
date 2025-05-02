import React, { PropsWithChildren, useEffect } from "react";

import "./index.css";
import { Reducer, Store } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector, useStore } from "react-redux";
import { remoteAppScopeName, setName } from "./redux/modules/name";
import nameReducer from "./redux/modules/name";

const App = () => {
  const name = useSelector<
    {
      [remoteAppScopeName]?: {
        value: string;
      };
    },
    string | undefined
  >((state) => state?.[remoteAppScopeName]?.value);

  const dispatch = useDispatch();

  const store = useStore();
  console.log(store.getState());

  return (
    <div className="container">
      <div>Name: remote-app</div>
      <div>Framework: react-18</div>
      <div>
        <button onClick={() => dispatch(setName({ name: `${Math.random()}` }))}>
          Change
        </button>
      </div>
      {name && <div>{name}</div>}
    </div>
  );
};

type RemoteAppWrapperProps = {
  store: Store;
  injectReducer: (key: string, asyncReducer: Reducer) => void;
};
const RemoteAppWrapper = ({
  store,
  injectReducer,
}: PropsWithChildren<RemoteAppWrapperProps>) => {
  useEffect(() => {
    injectReducer(remoteAppScopeName, nameReducer);
  }, []);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default React.memo(RemoteAppWrapper);
