import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/sossjk/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})