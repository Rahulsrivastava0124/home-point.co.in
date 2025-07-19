import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['e8a8-152-58-183-172.ngrok-free.app']
  },
  plugins: [react(), tailwindcss(),],
})
