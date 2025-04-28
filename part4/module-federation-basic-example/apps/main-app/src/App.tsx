import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { join, map } from "lodash";
import { NameProvider } from "shared-library";
const Button = React.lazy(() => import("component_app/Button"));
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";

// https://github.com/callstack/repack/issues/1117
const App = () => (
  <NameProvider name="hello">
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: main-app</div>
      <div>Framework: react-18</div>
      <div>{join(map(["1", "2"]), "-")}</div>
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Button
            onClick={() => {
              alert("Clicked");
            }}
          >
            Primary
          </Button>
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Button variant="warning">Warning</Button>
        </Suspense>
      </ErrorBoundary>
    </div>
  </NameProvider>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
