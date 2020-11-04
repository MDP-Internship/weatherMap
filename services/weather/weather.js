/* eslint-disable no-unused-vars */
// import request from 'request';
import request from 'request-promise';

const baseUrl = "http://api.openweathermap.org/data/2.5/weather";

const weatherToken = "d8e9fc63a25e52e274bfe51144f4c051";

class weatherController {



    /*    static weathercityname = async (cityname) => {
           const url = `${baseUrl}?q=${cityname}&appid=${weatherToken}&units=metric&lang=tr`;
           request(
               {
                   uri: url,
                   json: true
               }
               , (err, _response, body) => {
   
                   if (!err && _response.statusCode === 200) {
                       return body;
                   }
                   return "hata weatherCityName"
               });
       } */

    static weatherLocation = async (long, lat) => {
        const url = `${baseUrl}?lat=${lat}&lon=${long}&units=metric&appid=${weatherToken}`;
        return request(
            {
                method: "GET",
                uri: url,
                json: true
            }
        ).then((htmlString) => {
            return htmlString.weather.main;
        })
            .catch((err) => {
                return `Hata:${err}`;
            });




    }

}


export default weatherController;


