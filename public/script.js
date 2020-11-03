/* eslint-disable no-unused-vars */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

// https://docs.mapbox.com/mapbox-gl-js/api/

mapboxgl.accessToken = 'pk.eyJ1Ijoib3dlbmxhbWIiLCJhIjoiY2lleWljcnF4MDBiOXQ0bHR0anRvamtucSJ9.t3YnHHqvQZ8Y0MTCNy0NNw';
const ankara = [34.51773317578852, 39.06580893051233];
const place = Array(2);

const localUrl = "http://localhost:8000/";
const herokuUrl = "https://weatherpin.herokuapp.com/";

this.map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v9',
  center: ankara, // starting position
  zoom: 4 // starting zoom
});

map.on('click', (e) => {
  // console.log('A click event has occurred at ' + e.lngLat);
  const lang = e.lngLat.lat;
  const lot = e.lngLat.lng;
  const query = `?lang=${lang}&lat=${lot}`;

  popup(e.lngLat);
  $.get(`${localUrl}mapPin/${query}`, (data, status) => {
      // alert("Data: " + data + "\nStatus: " + status);
      // console.log(data);
      place[0] = data.map;
      place[1] = data.weather;



    });
});

var popup = (coordinate) => new mapboxgl.Popup({
  closeOnClick: true,
  closeButton: true,
  anchor: 'bottom-left',
}).setLngLat(coordinate)
  .setHTML(`<div class="popup-content"><div class="pin-icon"><i class="fas fa-map-pin"></i></div><div class="vl"></div><div>${place[0]}<br>derece${place[1]},</div></div>`)
  .addTo(this.map);


