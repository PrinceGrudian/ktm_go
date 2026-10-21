import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // This repository is named `ktm_go`, so GitHub Pages serves it below this path.
  base: '/ktm_go/',
});
