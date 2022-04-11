import { map, L } from './leaflet'
import { DELIMITS_ARRAY } from './geoJson/unipaz'

const LOCATIONS_NAMES = []

DELIMITS_ARRAY.forEach(function (item) {
  const nameInclude = LOCATIONS_NAMES.find(item2 => item2[0] === item.id)

  if (item.properties.name && !nameInclude) {
    LOCATIONS_NAMES.push([item.id, item.properties.name])
  }
})

const select = L.control()

select.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'select-info')
  this.update()
  return this._div
}

select.update = function () {
  this._div.innerHTML = `
    <label for="select-location"><h4>Lugares de UNIPAZ</h4></label>
    <select class="input-select" name="select-location" id="select-location">
      <option value="default" selected disabled hidden>Seleccione un lugar:</option>

      ${LOCATIONS_NAMES.map(item => `<option value="${item[0]}">${item[1]}</option>`).join('')}

    </select>
  `
}

select.addTo(map)

const selectLocation = document.getElementById('select-location')
let selectedLocation = null
let time = null

selectLocation.addEventListener('change', async function (e) {
  const { onEachFeature } = await import('./info')
  if (selectedLocation) {
    selectedLocation.remove()
    time && clearTimeout(time)
  }

  const id = e.target.value
  selectLocation.value = 'default'

  const LOCATIONS = DELIMITS_ARRAY.filter(item => item.id === id)

  const geoJsonLocation = {
    type: 'FeatureCollection',
    features: [
      ...LOCATIONS
    ]
  }

  selectedLocation = L.geoJson(geoJsonLocation, {
    onEachFeature
  })

  selectedLocation.addTo(map)

  selectedLocation.eachLayer(function (layer) {
    layer.openPopup()
  })

  map.flyTo(selectedLocation.getBounds().getCenter(), 18)

  time = setTimeout(() => {
    if (selectedLocation) selectedLocation.remove()
  }, 10000)
})
