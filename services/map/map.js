/* eslint-disable func-names */
import request from "request";


const token = 'pk.eyJ1Ijoib3dlbmxhbWIiLCJhIjoiY2lleWljcnF4MDBiOXQ0bHR0anRvamtucSJ9.t3YnHHqvQZ8Y0MTCNy0NNw';

class MapController {

    static mapToAdress = (lat, long) => {
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=${token}`;
        request(
            {
                uri: url,
                json: true
            }
            // eslint-disable-next-line consistent-return
            , (err, response, body) => {
                if (!err && response.statusCode === 200) {
                    return body;
                }

            });
    }


}


export default MapController;


