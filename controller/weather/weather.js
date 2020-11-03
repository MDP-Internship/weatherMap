import request from 'request';

const baseUrl = "http://api.openweathermap.org/data/2.5/weather";

const weatherToken = "d8e9fc63a25e52e274bfe51144f4c051";

class weatherController {

    static weathercityname = async (cityname, callback) => {
        const url = `${baseUrl}?q=${cityname}&appid=${weatherToken}&units=metric&lang=tr`;
        request(
            {
                uri: url,
                json: true
            }
            , (err, response, body) => {

                callback(err, response, body);
            });
    }

    static weatherLocation = async (lat, long, callback) => {
        const url = `${baseUrl}?lat=${lat}&lon=${long}&units=metric&appid=${weatherToken}`;
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


export default weatherController;


