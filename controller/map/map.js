const request = require("request");

var token = 'pk.eyJ1Ijoib3dlbmxhbWIiLCJhIjoiY2lleWljcnF4MDBiOXQ0bHR0anRvamtucSJ9.t3YnHHqvQZ8Y0MTCNy0NNw';

var mapToAdress = (lat, long, callback) => {
    var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + long + "," + lat + ".json?access_token=" + token;
    request(
        {
            uri: url,
            json: true
        }
        , function (err, response, body) {
            callback(err, response, body);
        });
}

exports.mapToAdress = mapToAdress;