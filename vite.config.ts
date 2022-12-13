import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], 
})
