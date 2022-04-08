import { map, Lft } from './leaflet'

import { onEachFeature } from './info'
import { UNIPAZ_LOCATIONS } from './geoJson/unipaz'

const RETORNO = Lft.marker([7.071283672458979, -73.73667776584625])
  .addTo(map)
  .bindPopup('Retorno a la Universidad')

export const UNIPAZ = Lft.geoJson(UNIPAZ_LOCATIONS, {
  onEachFeature
}).addTo(map)

export const MARK_LOCATIONS = {
  InformaciónUnipaz: UNIPAZ,
  Retorno: RETORNO
}
