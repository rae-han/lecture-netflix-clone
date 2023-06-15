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
    port: 8060,
    proxy: {
      'https://api.themoviedb.org/3': {
        target: 'https://api.themoviedb.org/3',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^https:\/\/api\.themoviedb\.org\/3/, ''),
        secure: false,
        // ws: true, // 찾아보니 websocket할 때 필요한 부분이라고 함
      },
      '/3': {
        target: 'https://api.themoviedb.org/3',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/3/, ''),
        secure: false,
        // ws: true, // 찾아보니 websocket할 때 필요한 부분이라고 함
      },
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@layouts', replacement: path.resolve(__dirname, 'src/layouts') },
    ],
  },
});
