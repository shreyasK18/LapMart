import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({mode})=>{
  const env=loadEnv(mode,process.cwd(),'')
  return {
  plugins: [react()],
  define:{
    'process.env':{
      PUBLIC_URL:'/',
      VITE_REACT_APP_BACKEND_BASEURL:'https://lap-mart-35z68c5ad-shreyas-kanchans-projects.vercel.app'
    }
    
  },
  server: {
    proxy: {   
      '/api': {
        target: env.VITE_REACT_APP_BACKEND_BASEURL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  
}
})

