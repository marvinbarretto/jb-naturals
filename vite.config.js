import { defineConfig } from 'vite';

export default defineConfig({
  base: '/jb-naturals/', 
  build: {
    outDir: 'dist', // Output directory for the build (default is 'dist')
  },
  server: {
    open: true, // Automatically open the browser on server start
  }
});
