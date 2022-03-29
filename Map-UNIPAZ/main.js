import './styles.css'

/* var map = L.map('map').setView([4, 72], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 500,
    zoomOffset: -1,
    accessToken: import.meta.env['VITE_ACCESSTOKEN']
}).addTo(map); */

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Al Dar Click, deberias estar aqui :D')
    .openPopup();
