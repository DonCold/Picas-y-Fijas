import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

const manifest = {
  id: '/beta/v1/',
  name: 'Mi Tienda | Controlando mi Negocio',
  short_name: 'Mi-Tienda',
  description: 'Controla el Inventario de tu Negocio',
  categories: ['productivity', 'utilities'],
  lang: 'es-ES',

  display: 'standalone',
  display_override: ["standalone", "fullscreen"],

  theme_color: '#ffffff',
  background_color: '#ffffff',

  icons: [
    {
      src: 'https://placekitten.com/g/192/192',
      sizes: '192x192',
      type: 'image/jpg',
    },
    {
      src: 'https://placekitten.com/g/512/512',
      sizes: '512x512',
      type: 'image/jpg',
    },
    {
      src: 'https://placekitten.com/g/512/512',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable',
    },
    {
      src: 'https://placekitten.com/g/512/512',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any',
    }
  ]
}

const pwaConfig = {
  includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
  workbox: {
    sourcemap: true
  },
  manifest
}

export default defineConfig({
  plugins: [
    react(),
    VitePWA(pwaConfig)
  ]
})
