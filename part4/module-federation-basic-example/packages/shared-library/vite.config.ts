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
      entry: "./src/index.ts",
      name: "shared-library",
      fileName: "index",
    },
    // 패키지를 사용하는 쪽에서 필요로하는 라이브러리 설정
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
