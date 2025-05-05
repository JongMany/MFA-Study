import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],
  build: {
    outDir: "./dist",
    lib: {
      entry: "./src/index.ts", // 라이브러리 진입점
      name: "ui-kit",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        // UMD 형태로 지원이 되도록
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
