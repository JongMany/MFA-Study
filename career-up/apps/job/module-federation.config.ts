const deps = require("./package.json").dependencies;
export const mfConfig = {
  name: "job",
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
    "@career-up/shell-router": {
      singleton: true,
    },
    "@career-up/ui-kit": {
      singleton: true,
    },
  },
};
