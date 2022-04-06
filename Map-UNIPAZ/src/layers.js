export const LAYERS = {
  "default": {
    "url": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.{ext}",
  },
  "satelital": {
    "url": "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    "id": "mapbox/satellite-v9",
    "token": import.meta.env["VITE_MAPBOXTOKEN"]
  },
  "light": {
    "url": "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  },
  "dark": {
    "url": "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  }
}
