var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";
d3.json(url, function (json) {
    var alldata = json.features;
    console.log(alldata);
});