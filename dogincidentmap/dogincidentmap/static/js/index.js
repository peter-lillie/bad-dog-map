var map = L.map('map', {
    photonControl: true,
    photonControlOptions: {
        resultsHandler: myHandler,
        placeholder: 'Find a location...',
        position: 'topright'
    }
}).setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function geoFindMe() {
    const status = document.querySelector("#find-me-status");

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = "";
        map.setView([latitude, longitude], 13);
    }

    function error() {
        status.textContent = "Unable to retrieve your location.";
    }

    if (!navigator.geolocation) {
        status.textContent = "Geolocation is not supported by your browser session.";
    } else {
        status.textContent = "Locating...";
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

var findMe = L.Control.extend({

    options: {
        position: 'topleft'
    },

    onAdd: function (map) {
        var container = L.DomUtil.get("find-me")
        return container;
    }
})

function myHandler(geojson) {
    console.debug(geojson);
};

const popup = L.popup();
const array_of_latlong = []

function onMapClick(e) {
    if (array_of_latlong.includes(e.latlng)) {

    } else {
        popup.setLatLng(e.latlng).setContent(`<a href="report?lat=${e.latlng.lat.toString()}&lng=${e.latlng.lng.toString()}">Report incident?</a>`).openOn(map);
    }
    console.log(e.latlng)
}

function generatePopup(fields) {
    var marker = L.marker([fields.latitude, fields.longitude]).bindPopup(L.popup().setContent(fields.title)).addTo(map)
    array_of_latlong.push([fields.latitude, fields.longitude])
}

const incident_data = JSON.parse(JSON.parse(
    document.currentScript.nextElementSibling.textContent
));

for (var i = 0; i < incident_data.length; i++) {
    var incident = incident_data[i]
    var infields = incident.fields
    console.log(infields)
    generatePopup(infields)
}

map.addControl(new findMe());
map.on("click", onMapClick);
document.querySelector("#find-me").addEventListener("click", geoFindMe);