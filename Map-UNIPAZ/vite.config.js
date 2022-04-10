import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

import { importFiles } from './readFile.js'
importFiles()

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true
    })
  ],
  resolve: {
    alias: {
      '@': 'src',
      '#': './'
    }
  }
})
