// File: vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Base public path when deployed under GitHub Pages at /portfolio/
  base: '/portfolio/',
  plugins: [react()],
});