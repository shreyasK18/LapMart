import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Matches "distDir" in vercel.json
  },
  base: '/', // Ensure this is correct for deployment
})

