import { map, L } from './leaflet'

import { getConfigStorage } from './storage'

import './select'
import { onEachFeature, style } from './info'

import { UNIPAZ_LOCATIONS } from './geoJson/unipaz'

const configStorage = getConfigStorage()

const RETORNO = L.marker([7.071283672458979, -73.73667776584625])
  .bindPopup('Retorno a la Universidad')

export const UNIPAZ = L.geoJson(UNIPAZ_LOCATIONS, {
  onEachFeature,
  style
})

configStorage?.retorno && RETORNO.addTo(map)
configStorage?.showInfo && UNIPAZ.addTo(map)

export const MARK_LOCATIONS = {
  InformaciónUnipaz: UNIPAZ,
  Retorno: RETORNO
}
