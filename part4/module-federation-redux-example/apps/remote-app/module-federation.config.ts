const deps = require("./package.json").dependencies;

export const mfConfig = {
  name: "remote_app",
  filename: "remoteEntry.js",
  exposes: {
    "./RemoteApp": "./src/App",
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
