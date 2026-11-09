import { cpSync } from 'node:fs';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [{
    name: 'copy-portfolio-assets',
    closeBundle() {
      cpSync('images', 'dist/images', { recursive: true });
      cpSync('assets', 'dist/assets', { recursive: true });
    },
  }],
});
