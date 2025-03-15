import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     external: [
  //       "@aws-amplify/ui-react/styles.css", // ignore react stuff
  //       "@aws-amplify/ui-react", // ignore react stuff
        
  //     ],
  //   },
  // },
})
