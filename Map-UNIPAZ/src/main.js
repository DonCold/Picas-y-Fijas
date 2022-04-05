import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility';

import './styles.css'

const map = L.map('map', {
  center: [7.06758, -73.74541],
  zoom: 17,
  minZoom: 15,
  attributionControl: true,
})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '<a target="_blank" href="https://map-unipaz.surge.sh/">Mapa Unipaz</a>'
}).addTo(map);
