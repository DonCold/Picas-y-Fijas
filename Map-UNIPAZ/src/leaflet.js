import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility';

import './styles.css'

const center = [7.06758, -73.74541];

const configLeaflet = {
  center,
  zoom: 17,
  minZoom: 15,
  attributionControl: true,
  maxBounds: [
    //south west
    [7.05492, -73.75344],
    //north east
    [7.07401, -73.73359]
  ],
}

export const map = L.map('map', configLeaflet).setView(center);
