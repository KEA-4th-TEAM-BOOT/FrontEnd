import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
  resolve: {
    alias: {
      "@": "/src",
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
  server: {
    port: 3000,
  },
  define: {
    global: {},
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/], // 번들에 포함시킬 모듈의 경로
      extensions: [".js", ".cjs"], // CommonJS 모듈로 간주할 파일의 확장자
      strictRequires: true, // require 구문에 해당 모듈이 없을 경우 에러 발생
      transformMixedEsModules: true, // import와 require문을 함께 사용하는 경우 이를 번들에 포함시키기 위함
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.indexOf("node_modules") !== -1) {
            const module = id.split("node_modules/").pop().split("/")[0];
            return `vendor-${module}`;
          }
        },
      },
    },
  },
});
