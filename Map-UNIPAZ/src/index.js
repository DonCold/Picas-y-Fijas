import { map, Lft } from './leaflet'
import './layers'

import { onEachFeature } from './info'
import { UNIPAZ_LOCATIONS } from './geoJson/unipaz'

export const UNIPAZ = Lft.geoJson(UNIPAZ_LOCATIONS, {
  onEachFeature
}).addTo(map)
