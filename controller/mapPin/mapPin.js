const map = require('../map/map.js');
const weather = require('../weather/weather');

const mapInfo = map.mapToAdress;
const weatherInfo = weather.wlocation;

var pinInfo = {
    map: "",
    weather: ""
};


var mapPinInfo = (lang, long) => {
  

    mapInfo(lang, long, (err, res, body) => {
        pinInfo.map = pinInfo.map = body.features[1].place_name;
    });
    weatherInfo(lang, long, (err, res, body) => {
        pinInfo.weather = body.main.temp;
    });

    return pinInfo;

};




exports.mapPinInfo = mapPinInfo;