var map = L.map('map').setView([51.505, -0.09], 13);
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

document.querySelector("#find-me").addEventListener("click", geoFindMe);