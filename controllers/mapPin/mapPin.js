/* eslint-disable no-unused-vars */
import axios from 'axios';



export default function mapPin(req, res) {
    const { long, lat } = req.query;


    // weather 
    const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
    const weatherToken = "d8e9fc63a25e52e274bfe51144f4c051";
    const weatherUrl = `${baseUrl}?lat=${lat}&lon=${long}&units=metric&appid=${weatherToken}`;
    // map
    const token = 'pk.eyJ1Ijoib3dlbmxhbWIiLCJhIjoiY2lleWljcnF4MDBiOXQ0bHR0anRvamtucSJ9.t3YnHHqvQZ8Y0MTCNy0NNw';
    const mapUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=${token}`;

    const map = axios.get(mapUrl);
    const weather = axios.get(weatherUrl);


    axios.all([map, weather]).then(axios.spread((...responses) => {
        const responsemap = responses[0]
        const responseweather = responses[1]

        // console.log(responsemap.data, responseweather.data);

        res.send({
            "map": responsemap.data.features[0].place_name,
            "weather": responseweather.data.main.temp

        });
        // use/access the results 
    })).catch(errors => {
        // react on errors.
    });


}