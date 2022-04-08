/* eslint-disable quote-props */
import { map, Lft } from './leaflet'
import { MARK_LOCATIONS } from './graphMap'

const DEFAULT_LAYER = 'Por Defecto'

export const LAYERS = {
  'Por Defecto': {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  },
  'Modo Oscuro': {
    url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
  },
  'Satelital': {
    url: 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
    id: 'mapbox/satellite-v9',
    token: import.meta.env.VITE_MAPBOXTOKEN
  }
}

const ATTRIBUTION = '© <a target="_blank" href="https://map-unipaz.surge.sh/">Mapa Unipaz</a>'

/* Creación de las Capas */

const LAYERS_DEFINE = {}

Object.entries(LAYERS).forEach(([key, value]) => {
  const SETTINGS = {
    id: value.id || '',
    accessToken: value.token || '',
    subdomains: value.subdomains || 'abc',
    attribution: ATTRIBUTION
  }

  const newLayer = Lft.tileLayer(value.url, SETTINGS)
  LAYERS_DEFINE[key] = newLayer // Se guarda en el objeto de capas
})

LAYERS_DEFINE[DEFAULT_LAYER].addTo(map) // Se agrega la capa por defecto

Lft.control.layers(LAYERS_DEFINE, MARK_LOCATIONS, {
  position: 'bottomright'
}).addTo(map)
