const deps = require("./package.json").dependencies;

export const mfConfig = {
  name: "main_app",
  filename: "remoteEntry.js",
  remotes: {
    dynamic: `promise new Promise(resolve => {
      fetch("http://localhost:4000/remote.json")
        .then((res) => res.json())
        .then(({remoteUrl, scope}) => {
          console.log(remoteUrl, scope);

          const script = document.createElement('script')
          script.src = remoteUrl;
          script.onload = () => {
            const proxy = {
              get: (request) => window[scope].get(request),
              init: (...arg) => {
                try {
                  return window[scope].init(...arg)
                } catch(e) {
                  console.log('remote container already initialized')
                }
              }
            }
            resolve(proxy)
          }

          document.head.appendChild(script);
        });
      })
    `,
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
