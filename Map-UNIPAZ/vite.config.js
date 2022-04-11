import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  publicDir: 'assets',
  plugins: [
    createHtmlPlugin({
      minify: true
    })
  ],
  resolve: {
    alias: {
      '@': 'src',
      '#': './assets'
    }
  }
})
