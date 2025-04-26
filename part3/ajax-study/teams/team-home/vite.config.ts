import { defineConfig } from "vite";

// CORS 처리
export default defineConfig({
  server: {
    proxy: {
      "/jobs/fragments/recommendation": {
        target: "http://localhost:3002",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(
            /^\/jobs\/fragments\/recommendation/,
            "/jobs/fragments/recommendation"
          ),
      },
    },
  },
});
