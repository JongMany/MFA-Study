const deps = require("./package.json").dependencies;

export const mfConfig = {
  name: "edu",
  filename: "remoteEntry.js",
  exposes: {
    "./injector": "./src/injector.tsx",
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
