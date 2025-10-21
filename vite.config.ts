/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    include: ["**/__tests__/**/*.{ts,tsx}", "**/*{spec,test}.{ts,tsx}"],
    css: true,
  },
} as UserConfig);
