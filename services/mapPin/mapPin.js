import WeatherService from '../weather/weather';
// import MapService from '../map/map';

export default class MapPinServices {


  static async  info(long,lat) {

    return {
      map:  "denizli",
      weather:   WeatherService.weatherLocation(long,lat)
    };

  }




}