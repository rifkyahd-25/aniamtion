import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',  // This points '@' to the 'src' directory
    },
  },
});
