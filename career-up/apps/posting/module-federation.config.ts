const deps = require("./package.json").dependencies;
export const mfConfig = {
  name: "posting",
  filename: "remoteEntry.js",
  exposes: {
    "./injector": "./src/injector.tsx",
  },
  remotes: {
    fragment_recommend_connections:
      "fragment_recommend_connections@http://localhost:5001/remoteEntry.js",
    job: "job@http://localhost:3004/remoteEntry.js",
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
    "@career-up/ui-kit": {
      singleton: true,
    },
    "@career-up/shell-router": {
      singleton: true,
    },
  },
};
