const deps = require("./package.json").dependencies;

export const mfConfig = {
  name: "fragment_recommend_connections",
  exposes: {
    "./container": "./src/containers/recommend-connections-container.tsx",
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
