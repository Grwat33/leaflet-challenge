var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";
d3.json(url, function (json) {
    var alldata = json.features;
    console.log(alldata);

    var geometry = alldata.map(object => object.geometry);
    var id = alldata.map(object => object.id);
    var properties = alldata.map(object => object.properties);
    var type = alldata.map(object => object.type);
    var mag = properties.map(object => object.mag);
    console.log(mag);

    var map = L.map('map', {
        center: [37, 263],
        zoom: 4
    });

    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/streets-v11",
        accessToken: "pk.eyJ1IjoiZ3J3YXQzMyIsImEiOiJja2lzMmV4cGUxc3M2MndvODR6YWs2cnl4In0.MrGype25gR61KiJcqHVyvw"
    }).addTo(map);

    
});