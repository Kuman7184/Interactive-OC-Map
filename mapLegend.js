var mapLegend = L.control({position: 'bottomright'});

mapLegend.onAdd = function (mymap) {

	var div = L.DomUtil.create('div', 'data legend'),
		grades = [0, 5, 10, 25, 50, 100, 250, 500],
        labels = [];
        
	for (var i = 0; i < grades.length; i++) {
		div.innerHTML +=
			'<d style="background:' + getCityColor(grades[i] + 1) + '"></d> ' +
			grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
	}

	return div;
};

mapLegend.addTo(mymap);