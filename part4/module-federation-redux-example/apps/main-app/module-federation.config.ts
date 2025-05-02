const deps = require("./package.json").dependencies;

export const mfConfig = {
  name: "main_app",
  remotes: {
    remote_app: "remote_app@http://localhost:3001/remoteEntry.js",
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
