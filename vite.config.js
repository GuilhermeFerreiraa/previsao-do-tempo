import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": "http://apiadvisor.climatempo.com.br",
    },
  },
  plugins: [react()],
});
