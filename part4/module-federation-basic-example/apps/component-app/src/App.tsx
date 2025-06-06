import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Button from "./components/Button";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: component-app</div>
    <div>Framework: react-18</div>
    <Button>Sample</Button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
