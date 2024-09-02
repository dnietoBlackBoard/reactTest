import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/reactTest/",
  build: {
    assetsDir: "assets", // Set the assets directory
    emptyOutDir: true, // Empty the output directory before building
  },
});
