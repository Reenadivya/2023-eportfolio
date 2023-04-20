import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "react-router-dom",
        "@fortawesome/react-fontawesome",
        "@fortawesome/free-solid-svg-icons",
        "@emailjs/browser",
      ],
    },
  },
});
