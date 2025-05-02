const deps = require("./package.json").dependencies;

export const mfConfig = {
  name: "app_shell",
  filename: "remoteEntry.js",
  remotes: {
    app_jobs: "app_jobs@http://localhost:3001/remoteEntry.js",
    app_network: "app_network@http://localhost:3002/remoteEntry.js",
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
} as const;
