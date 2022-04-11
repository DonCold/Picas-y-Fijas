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
  if (!this._div) return
  const showMessage = '<h4>UNIPAZ - Información</h4>'

  if (!props) return this._div.innerHTML = `${showMessage} <small class="center"><i>Pasa el cursor sobre un lugar</i></small>`

  const { name } = props
  this._div.innerHTML = `
    ${showMessage}
    <strong>Edificio: </strong>${name}<br>
    <small class="center"><i>Click para saber más</i></small>
  `
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

function styleHover (e) {
  const layer = e.target
  const properties = layer.feature.properties

  layer.setStyle({
    weight: 2,
    fillColor: properties.hoverFillColor || properties.fillColor,
    color: properties.hoverColor || '#17202A',
    dashArray: '3',
    opacity: 1
  })

  info?.update(properties)
}

function resetStyleHover (e) {
  UNIPAZ.resetStyle(e.target)

  info?.update()
}

function zoomToFeature (e) {
  map.fitBounds(e.target.getBounds())
}

export const onEachFeature = (feature, layer) => {
  layer.on({
    mouseover: styleHover,
    mouseout: resetStyleHover,
    click: zoomToFeature
  })

  const message = `
    ${
      feature.properties.html?.replace('{{ title }}', feature.properties.name) ||
      `<strong>Edificio</strong>: ${feature.properties.name}`
    }
  `

  layer.bindPopup(message)
}

export const style = (feature) => {
  return {
    fillColor: feature.properties.fillColor || '#87DF6A',
    fillOpacity: 0.6,
    weight: 2,
    opacity: feature.properties.opacity || 0,
    color: feature.properties.color || 'white',
    dashArray: '3'
  }
}
