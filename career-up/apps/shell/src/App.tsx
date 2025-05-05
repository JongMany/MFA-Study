import React from "react";
import ReactDOM from "react-dom/client";

import "@career-up/ui-kit/index.css";
import { Button } from "@career-up/ui-kit";

const App = () => (
  <div className="container">
    <div>Name: shell</div>
    <div>Framework: react-18</div>
    <Button></Button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
