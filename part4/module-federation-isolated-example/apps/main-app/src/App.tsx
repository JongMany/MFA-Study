import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

const elementId = "isolated-app";

const App = () => {
  useEffect(() => {
    let unmount: () => void = () => {};

    import("isolated_app/injector").then(({ inject }) => {
      unmount = inject(elementId, { name: "main" });
    });
    return () => {
      unmount();
    };
  }, []);

  return (
    <div className="container">
      <div>Name: main-app</div>
      <div>Framework: react-18</div>
      <div id={elementId}></div>
    </div>
  );
};

const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
