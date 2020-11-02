var request = require("request");

var baseUrl = "http://api.openweathermap.org/data/2.5/weather";

var weatherToken = "d8e9fc63a25e52e274bfe51144f4c051";



function weathercityname(cityname, callback) {
    let url = baseUrl + "?q=" + cityname + "&appid=" + weatherToken + "&units=metric&lang=tr";
    request(
        {
            uri: url,
            json: true
        }
        , function (err, response, body) {

            callback(err, response, body);
        });
}

function weatherLocation(lat, long, callback) {
    let url = baseUrl + "?lat=" + lat + "&lon=" + long + "&appid=" + weatherToken;
    request(
        {
            uri: url,
            json: true
        }
        , function (err, response, body) {
            callback(err, response, body);

        });
}




exports.wcityname = weathercityname;
exports.wlocation = weatherLocation;


