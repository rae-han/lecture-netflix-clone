import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import tsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'path';

console.log(444, __dirname);

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), tsconfigPaths()],
  plugins: [react()],
  server: {
    port: 3080,
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@layouts', replacement: path.resolve(__dirname, 'src/layouts') },
    ],
  },
});
