import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: posting</div>
    <div>Framework: react-18</div>
  </div>
);

const root = ReactDOM.createRoot(
  document.getElementById("app-posting") as HTMLElement
);
root.render(<App />);
