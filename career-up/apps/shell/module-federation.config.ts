const deps = require("./package.json").dependencies;

export const mfConfig = {
  name: "shell",
  remotes: {
    posting: "posting@http://localhost:3001/remoteEntry.js",
    edu: "edu@http://localhost:3002/remoteEntry.js",
    network: "network@http://localhost:3003/remoteEntry.js",
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
