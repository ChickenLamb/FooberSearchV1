import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
// react swc for fast dev sever
// import react from "@vitejs/plugin-react-swc";
import { UserConfig } from 'vite'

const config: UserConfig = {
  base:'/',
  // We opt into pre-rendering by setting the global config prerender
  plugins: [react(), ssr({ prerender: true ,
    // set includeAssetsImportedByServer: true to include Sever code imported Static files during client production bundling(*experimental feature*)
    // includeAssetsImportedByServer: true
  })]

}

export default config
