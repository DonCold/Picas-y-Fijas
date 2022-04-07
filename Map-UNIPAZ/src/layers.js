import { map } from './leaflet'

export const LAYERS = {
  "Satelital": {
    "url": "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    "id": "mapbox/satellite-v9",
    "token": import.meta.env["VITE_MAPBOXTOKEN"]
  },
  "Modo Oscuro": {
    "url": "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  },
  "Por Defecto": {
    "url": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
}

const ATTRIBUTION = `© <a target="_blank" href="https://map-unipaz.surge.sh/">Mapa Unipaz</a>`

const LAYER_DEFINE = {} // Se define un objeto vacio para guardar los objetos de las capas

Object.entries(LAYERS).forEach(([key, value]) => {
  const SETTINGS = {
    id: value.id || '',
    accessToken: value.token || '',
    subdomains: value.subdomains || 'abc',
    attribution: ATTRIBUTION,
  }

  const newLayer = L.tileLayer(value.url, SETTINGS).addTo(map);
  LAYER_DEFINE[key] = newLayer; // Se guarda en el objeto de capas
});

L.control.layers(LAYER_DEFINE).addTo(map); // Se agrega el control de capas al mapa
