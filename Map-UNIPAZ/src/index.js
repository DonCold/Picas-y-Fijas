/* eslint-disable no-return-assign */
import { map, Lft } from './leaflet'
import './layers'

import { UNIPAZ_LOCATIONS } from './geoJson/unipaz'

const info = Lft.control()

info.onAdd = function (map) {
  this._div = Lft.DomUtil.create('div', 'info')
  this.update()
  return this._div
}

info.update = function (props) {
  const showMessage = '<h4>UNIPAZ - Información</h4>'

  if (!props) return this._div.innerHTML = `${showMessage} Pasa el cursor sobre un lugar`

  const { name } = props
  this._div.innerHTML = `${showMessage} <strong>Edificio: </strong>${name}`
}

info.addTo(map)

const UNIPAZ = Lft.geoJson(UNIPAZ_LOCATIONS, {
  onEachFeature
}).addTo(map)

/* TODO: por mirar :D ========================= */

function borderbox (event) {
  const layer = event.target

  layer.setStyle({
    weight: 1,
    color: '#17202A',
    dashArray: '',
    fillOpacity: 0.7,
    id: 'test'
  })

  info.update(layer.feature.properties)
}

function resetBorderBox (event) {
  UNIPAZ.resetStyle(event.target)
  info.update()
}

function zoomToFeature (event) {
  map.fitBounds(event.target.getBounds())
}

function onEachFeature (feature, layer) {
  layer.on({
    mouseover: borderbox,
    mouseout: resetBorderBox,
    click: zoomToFeature
  })
  layer.bindPopup('<strong>Edificio: </strong>' + feature.properties.name + '<br/>')
}
