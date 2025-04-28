import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { ErrorBoundary } from "react-error-boundary";

// @ts-ignore
const Button = React.lazy(() => import("component_app/Button"));

const App = () => (
  <div className="container">
    <div>Name: main-app</div>
    <div>Framework: react-18</div>
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<div>Loading</div>}>
        <Button
          onClick={() => {
            console.log("Clicked!");
          }}
        >
          Primary
        </Button>
      </Suspense>
    </ErrorBoundary>

    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<div>Loading</div>}>
        <Button variant="warning">Warning</Button>
      </Suspense>
    </ErrorBoundary>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
