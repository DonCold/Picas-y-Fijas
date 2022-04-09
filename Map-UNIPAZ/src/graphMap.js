import { map, Lft } from './leaflet'

import { getConfigStorage } from './storage'

import { onEachFeature } from './info'
import { UNIPAZ_LOCATIONS } from './geoJson/unipaz'

const configStorage = getConfigStorage()

const RETORNO = Lft.marker([7.071283672458979, -73.73667776584625])
  .bindPopup('Retorno a la Universidad')

export const UNIPAZ = Lft.geoJson(UNIPAZ_LOCATIONS, {
  onEachFeature
})

configStorage?.retorno && RETORNO.addTo(map)
configStorage?.showInfo && UNIPAZ.addTo(map)

export const MARK_LOCATIONS = {
  InformaciónUnipaz: UNIPAZ,
  Retorno: RETORNO
}
