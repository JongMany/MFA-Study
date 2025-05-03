const deps = require("./package.json").dependencies;

export const mfConfig = {
  name: "component_app1",
  filename: "remoteEntry.js",
  exposes: {
    "./Button": "./src/components/Button",
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
