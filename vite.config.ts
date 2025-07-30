/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
    strictPort: true
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // TypeScript 오류를 무시
        if (warning.code === 'TS2307' || warning.code === 'TS6133' || warning.code === 'TS2769') {
          return
        }
        warn(warning)
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
});