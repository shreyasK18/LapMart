import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({mode})=>{

  const env=loadEnv(mode,process.cwd(),'')
  console.log("Environment Variable");
  console.log(env.VITE_REACT_APP_BACKEND_BASEURL)
  return {
  plugins: [react()],
  define:{
    'process.env':{
      PUBLIC_URL:'/',
    }  
  }
}
})

