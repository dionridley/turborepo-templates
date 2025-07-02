import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    // Optimize for Storybook static build
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate chunks for better caching
          vendor: ['react', 'react-dom'],
          storybook: ['@storybook/react', '@storybook/blocks'],
          ui: ['@repo/ui'],
        },
      },
    },
  },
  optimizeDeps: {
    // Pre-bundle for faster Storybook startup
    include: [
      'react',
      'react-dom',
      '@repo/ui',
      '@storybook/react',
      '@storybook/blocks',
    ],
  },
  server: {
    // Better development experience
    host: true,
    cors: true,
  },
})