import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is the most important setting. It tells Vite that the 'src'
  // folder is the root of your application. The dev server will
  // look for index.html inside this 'src' folder.
  root: 'src',

  build: {
    // This tells Vite where to put the final built files.
    // The '../' goes up one level from 'src' to the project root,
    // and creates the 'dist' folder there.
    outDir: '../dist',
    emptyOutDir: true,
  }
})