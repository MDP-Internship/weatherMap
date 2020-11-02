const request = require("request");
var weather = require("./weather");
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));


app.listen(8000, () => {
    console.log('App listening on port 8000!');
});

/* 
var wCityName = (city) => weather.cityname(city, (err, response, body) => {
    if (err) {
        console.log('hata');

    } else {
        console.log("hava bugün " + body.weather[0].main);
        console.log("şehir: " + body.name);
    }
}); */


var wCityLocation = (lat, long) => weather.location(lat, long, (err, response, body) => {

    if (err) {
        console.log('hata');

    } else {
        console.log("hava bugün " + body.weather[0].main);
        console.log("şehir: " + body.name);
    }
}
);
//  wCityLocation(37.0736073737352, 36.26829237271366);
//  wCityLocation(37.079053, 36.250319);

app.get('/map', (req, res) => {
    console.log(req.body);

    // wCityLocation(req.lot,req.);

});

//konum değerleri

//osmaniye mapbox 36.26829237271366, 37.0736073737352
//osmaniye googleMap 37.079053, 36.250319

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





mapToAdress(37.21322953818863, 36.365656577636855,
    (err, response, body) => {
        if (!err) {
            console.log(body.features[1].place_name);
        } else {
            console.log("hata");

        }
    }

);

//json data model

