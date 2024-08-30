import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/vite-react-deploy/", // Set the base URL (for the assets)
  build: {
    // outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
  },
});
