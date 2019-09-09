var data = L.control({position:"bottomleft"});

data.onAdd = function(mymap){
	this._div = L.DomUtil.create('div', 'data');
	this.update();
	return this._div;
};

data.update = function (props) {
	this._div.innerHTML = '<h4>Orange County City Pledges</h4>' +  (props ?
	'<b>' + props.name + '</b><br />' + props.pledges + ' pledges'
	: 'Hover over a city');
};

data.addTo(mymap);
