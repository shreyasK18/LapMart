import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env':{
      PUBLIC_URL:'dfkldf'
     
    }
    
  },
  server: {
    proxy: {   
      '/api': {
        target: process.env.VITE_REACT_APP_BACKEND_BASEURL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  
})

