var request = require("request");
/* var cityname;
var url = "http://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=d8e9fc63a25e52e274bfe51144f4c051&units=metric&lang=tr";
 */
function weathercityname(cityname, callback) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=d8e9fc63a25e52e274bfe51144f4c051&units=metric&lang=tr";
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
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=d8e9fc63a25e52e274bfe51144f4c051";
    request(
        {
            uri: url,
            json: true
        }
        , function (err, response, body) {
            callback(err, response, body);

        });
}




exports.cityname = weathercityname;
exports.location = weatherLocation;


