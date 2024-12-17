import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Local network se access karne ke liye
    port: 3000,       // Aapko desired port number yahan set karna hoga
  }
})
