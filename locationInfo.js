var apiURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/36.365656577636855%2C37.21322953818863.json?access_token=pk.eyJ1Ijoic2VhcmNoLW1hY2hpbmUtdXNlci0xIiwiYSI6ImNrN2Y1Nmp4YjB3aG4zZ253YnJoY21kbzkifQ.JM5ZeqwEEm-Tonrk5wOOMw&cachebuster=1604078470948&autocomplete=true"

// const bodyParser = require("body-parser");

var ankara=[34.51773317578852, 39.06580893051233];


var mapToAdress = (lat, long, callback) => {
    var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + long + "," + lat + ".json";
    request(
        {
            uri: url,
            json: true
        }
        , function (err, response, body) {
            callback(err, response, body);
        });
}
mapToAdress(34.51773317578852,39.06580893051233,
    (err, response, body) => {
        if (!err) {
            console.log(body.features.place_name);
        } else {
            console.log("hata");

        }
    }

);
