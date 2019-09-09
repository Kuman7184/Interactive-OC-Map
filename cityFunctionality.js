var geojson; 	

function getCityColor(p) 
{
    return p > 500 ? '#800026' :
		p > 250  ? '#BD0026' :
		p > 100  ? '#E31A1C' :
		p > 50  ? '#FC4E2A' :
		p > 25   ? '#FD8D3C' :
		p > 10   ? '#FEB24C' :
		p > 5   ? '#FED976' :
					'#FFEDA0';
}

function style(feature) {
    return {
	    "fillColor": getCityColor(feature.properties.pledges),
		"weight": 2,
		"opacity": 1,
		"color": 'white',
		"fillOpacity": 0.7,
		"text": "hi"
	};
}
    
function zoomToFeature(e) 
{
	mymap.fitBounds(e.target.getBounds());
}

function highlightCity(e) 
{
	var layer = e.target;

	layer.setStyle(
	{
		weight: 4,
		color: '#424242',
		fillOpacity: 0.7
	});

	data.update(layer.feature.properties);

	layer.bringToFront();
}

function resetCityHighlight(e) 
{
	geojson.resetStyle(e.target);
	data.update();
}

function onEachCity(city, layer) 
{
	layer.on(
	{
		mouseover: highlightCity,
		mouseout: resetCityHighlight,
		click: zoomToFeature
	});
}	
