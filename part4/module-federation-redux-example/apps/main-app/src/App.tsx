import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import createStore from "./redux/store";
import { decrement, increment } from "./redux/modules/counter";

const { store, injectReducer } = createStore();
type Store = ReturnType<typeof store.getState>;

const RemoteApp = React.lazy(() => import("remote_app/RemoteApp"));

const App = () => {
  const counter = useSelector<Store, number>((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div>{counter}</div>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteApp store={store} injectReducer={injectReducer} />
      </Suspense>
    </div>
  );
};

const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
