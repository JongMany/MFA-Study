import React from "react";
import ReactDOM from "react-dom/client";
import Button from "component_app/Button";
import { join, map } from "lodash";
import { NameProvider } from "shared-library";

import "./index.css";

const App = () => (
  <NameProvider name="hello">
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: main-app</div>
      <div>Framework: react-18</div>
      <div>{join(map(["1", "2"]), "-")}</div>
      <Button
        onClick={() => {
          alert("Clicked");
        }}
      >
        Primary
      </Button>
      <Button variant="warning">Warning</Button>
    </div>
  </NameProvider>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
