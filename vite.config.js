import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});


// server: {
//   proxy: {
//     "/api": {
//       target: "http://apiadvisor.climatempo.com.br/",
//       changeOrigin: true,
//       secure: false,
//     },
//   },
// },