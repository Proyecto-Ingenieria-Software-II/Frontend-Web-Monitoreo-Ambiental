// Crear mapa
var map = L.map("map");

// Configuracion base
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Cargar el GeoJSON de Bogotá
fetch("./geojson/bogota.geojson")
  .then(res => res.json())
  .then(data => {
    // Crear capa GeoJSON
    var bogotaLayer = L.geoJSON(data);

    // Ajustar vista
    map.fitBounds(bogotaLayer.getBounds());

    // Configuracion para que se recorte la vista al geojson
    L.mask(data, {
      fillColor: "white", 
      fillOpacity: 1
    }).addTo(map);
  });