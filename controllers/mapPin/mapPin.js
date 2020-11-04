import MapPinServices from '../../services/mapPin/mapPin';

// import LocationsType from "../../enums/LocationsType";

export default class MapPin {

    static info(req, res) {

        const { lat, long } = req.query;

        // res.send(`lat:${lat}long:${long}`);
        res.send(MapPinServices.info(long, lat));

    }

}