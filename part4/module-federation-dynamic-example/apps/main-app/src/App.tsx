import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import DynamicButton from "./components/DynamicButton";

const App = () => {
  const [button, setButton] = useState<{
    url?: string;
    scope?: string;
    module?: string;
  }>({});

  function setButtonFromComponentApp1() {
    setButton({
      // url: "http://localhost:3001/remoteEntry.js",
      url: "http://localhost:3001",
      scope: "component_app1",
      module: "./Button",
    });
  }

  function setButtonFromComponentApp2() {
    setButton({
      url: "http://localhost:3002",
      scope: "component_app2",
      module: "./Button",
    });
  }

  return (
    <div className="container">
      <div>Name: main-app</div>
      <div>Framework: react-18</div>
      <div>
        <button onClick={setButtonFromComponentApp1}>
          Load Component App 1 Button
        </button>
        <button onClick={setButtonFromComponentApp2}>
          Load Component App 2 Button
        </button>
      </div>
      <div>
        <DynamicButton button={button} />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
