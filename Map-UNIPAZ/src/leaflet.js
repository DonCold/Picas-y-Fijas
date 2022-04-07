import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility';

import './styles.css'

const CENTER = [7.06758, -73.74541]; // Centro de UNIPAZ

const CONFIG_LEAFLET = {
  center: CENTER,
  zoom: 17,
  minZoom: 14,
  attributionControl: true,
  maxBounds: [
    //south west
    [7.05492, -73.75344],
    //north east
    [7.07401, -73.73359]
  ],
}

export const map = L.map('map', CONFIG_LEAFLET).setView(CENTER); // Se crea el mapa
