/* eslint-disable no-return-assign */
import { map, L } from './leaflet'
import { UNIPAZ } from './graphMap'

import { getConfigStorage, setConfigStorage } from './storage'

/* Muestra la Información como Hover */

export const info = L.control()

info.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info')
  this.update()
  return this._div
}

info.update = function (props) {
  const showMessage = '<h4>UNIPAZ - Información</h4>'

  if (!props) return this._div.innerHTML = `${showMessage} Pasa el cursor sobre un lugar`

  const { name } = props
  this._div.innerHTML = `${showMessage} <strong>Edificio: </strong>${name}`
}

getConfigStorage()?.showInfo && info.addTo(map)

map.on('overlayadd', function (eo) {
  if (eo.name === 'InformaciónUnipaz') {
    info.addTo(map)
    setConfigStorage({ showInfo: true })
  }
  if (eo.name === 'Retorno') setConfigStorage({ retorno: true })
})

map.on('overlayremove', function (eo) {
  if (eo.name === 'InformaciónUnipaz') {
    info.remove()
    setConfigStorage({ showInfo: false })
  }
  if (eo.name === 'Retorno') setConfigStorage({ retorno: false })
})

/* Muestra la Información Desplegada */

function borderbox (e) {
  const layer = e.target

  layer.setStyle({
    weight: 1,
    color: '#17202A',
    dashArray: '',
    fillOpacity: 0.7,
    id: 'test'
  })

  info.update(layer.feature.properties)
}

function resetBorderBox (e) {
  UNIPAZ.resetStyle(e.target)

  info.update()
}

function zoomToFeature (e) {
  map.fitBounds(e.target.getBounds())
}

export const onEachFeature = (feature, layer) => {
  layer.on({
    mouseover: borderbox,
    mouseout: resetBorderBox,
    click: zoomToFeature
  })

  const message = `<strong>Edificio: </strong>${feature.properties.name}`
  layer.bindPopup(message)
}
