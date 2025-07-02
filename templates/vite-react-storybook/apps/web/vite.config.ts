import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react({
      // React 19 optimizations
      jsxImportSource: 'react',
      babel: {
        plugins: [
          // Enable React 19 compiler optimizations when available
        ],
      },
    }),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true, // Allow external connections
  },
  build: {
    // Optimize for modern browsers (React 19 targets)
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          react: ['react', 'react-dom'],
          ui: ['@repo/ui'],
        },
      },
    },
  },
  optimizeDeps: {
    // Pre-bundle dependencies for faster dev server startup
    include: ['react', 'react-dom', '@repo/ui'],
  },
})