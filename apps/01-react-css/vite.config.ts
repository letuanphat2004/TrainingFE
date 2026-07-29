import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Keep React Fast Refresh and JSX transformation in Vite's official plugin.
export default defineConfig({
  plugins: [react()],
});
