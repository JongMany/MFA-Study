const deps = require("./package.json").dependencies;

export const mfConfig = {
  name: "main_app",
  filename: "remoteEntry.js",
  remotes: {
    component_app: "component_app@http://localhost:3001/remoteEntry.js",
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
  },
};
