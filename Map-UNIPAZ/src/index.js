import { map } from './leaflet'
import { LAYERS } from './layers'

const settings = {
  attribution: '<a target="_blank" href="https://map-unipaz.surge.sh/">Mapa Unipaz</a>'
}

L.tileLayer(LAYERS.openStreetMap, settings).addTo(map);
