import request from "request";


const token = 'pk.eyJ1Ijoib3dlbmxhbWIiLCJhIjoiY2lleWljcnF4MDBiOXQ0bHR0anRvamtucSJ9.t3YnHHqvQZ8Y0MTCNy0NNw';

class MapController {

    static mapToAdress = async (lat, long, callback) => {
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=${token}`;
        request(
            {
                uri: url,
                json: true
            }
            , (err, response, body) => {
                callback(err, response, body);
            });
    }


}


export default MapController;


