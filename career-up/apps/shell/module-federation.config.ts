const deps = require("./package.json").dependencies;

export const mfConfig = {
  name: "shell",

  remotes: {},
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
