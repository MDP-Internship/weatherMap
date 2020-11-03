// import { static } from 'express';
import mapController from '../map/map';
import weatherController from '../weather/weather';






export default async function mapPin(lang, long) {

    const pinInfo = {
        map: "",
        weather: ""
    };

    mapController.mapToAdress(lang, long, (err, response, body) => {
        pinInfo.map = body.features[1].place_name;
    });
    weatherController.weatherLocation(lang, long, (err, response, body) => {
        pinInfo.weather = body.main.temp;
    });

    return pinInfo;
};
