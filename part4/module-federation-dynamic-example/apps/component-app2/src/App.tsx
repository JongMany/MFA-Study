import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Button from "./components/Button";

const App = () => (
  <div className="container">
    <div>Name: component-app2</div>
    <div>Framework: react-18</div>
    <Button />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
