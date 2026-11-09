import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.WEB_PORT || 5173),
    // Let Vite fall back to the next free port for `npm run dev:web` too.
    // The root launcher normally chooses a free port and supplies WEB_PORT.
    strictPort: false,
  },
});
