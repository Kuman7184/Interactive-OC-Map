var searchControl = new L.Control.Search({
    layer: geojson,
    propertyName: 'name',
    marker: false,
    position: 'topright',
    autoCollapse: false,
    moveToLocation: function(latlng, title, mymap) {
        var zoom = mymap.getBoundsZoom(latlng.layer.getBounds());
          mymap.setView(latlng, zoom); 
    }
});

searchControl.on('search:locationfound', function(e) {
    

    e.layer.setStyle({
        weight: 4,
        color: '#424242',
        fillOpacity: 0.7
    });

    data.update(e.layer.feature.properties);

    e.layer.bringToFront();


})

searchControl.on('search:collapsed', function(e) {
        geojson.eachLayer(function(layer) {
        geojson.resetStyle(layer);
    });	
});

mymap.addControl( searchControl );