import { map } from './leaflet'

export const LAYERS = {
  "Por Defecto": {
    "url": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
  "Satelital": {
    "url": "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    "id": "mapbox/satellite-v9",
    "token": import.meta.env["VITE_MAPBOXTOKEN"]
  },
  "Modo Oscuro": {
    "url": "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  }
}

const LAYER_DEFINE = {}

Object.entries(LAYERS).forEach(([key, value]) => {
  const SETTINGS = {
    id: value.id || '',
    accessToken: value.token || '',
    subdomains: value.subdomains || 'abc',
    attribution: '<a target="_blank" href="https://map-unipaz.surge.sh/">Mapa Unipaz</a>'
  }

  const newLayer = L.tileLayer(value.url, SETTINGS).addTo(map);
  LAYER_DEFINE[key] = newLayer;
});

L.control.layers(LAYER_DEFINE).addTo(map);
