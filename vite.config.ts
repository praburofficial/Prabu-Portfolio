import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-framer': ['framer-motion'],
          'vendor-particles': ['@tsparticles/react', '@tsparticles/slim'],
          'vendor-utils': ['lucide-react', 'clsx', 'tailwind-merge', 'lenis'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})