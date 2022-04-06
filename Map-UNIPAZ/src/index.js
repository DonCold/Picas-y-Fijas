import { map } from './leaflet'
import { LAYERS } from './layers'

const SHOW_LAYER = 'satelital'

let USE_LAYER = SHOW_LAYER.toLowerCase()
USE_LAYER = LAYERS[USE_LAYER] ? USE_LAYER : 'default'

const SETTINGS = {
  id: LAYERS[USE_LAYER].id || '',
  accessToken: LAYERS[USE_LAYER].token || '',
  ext: LAYERS[USE_LAYER].ext || 'png',
  attribution: '<a target="_blank" href="https://map-unipaz.surge.sh/">Mapa Unipaz</a>'
}

L.tileLayer(LAYERS[USE_LAYER].url, SETTINGS).addTo(map);
