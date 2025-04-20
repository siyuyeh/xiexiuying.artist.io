import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/xiexiuying.artist.io/',    // ← 加上這行
  plugins: [react()],
  server: {
    port: 1420,
    strictPort: true
  }
});
