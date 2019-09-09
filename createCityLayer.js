geojson = L.geoJson(ocCityBoundaries, {
    style: style,
    onEachFeature: onEachCity
}).addTo(mymap)