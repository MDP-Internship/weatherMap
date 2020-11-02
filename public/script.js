//https://docs.mapbox.com/mapbox-gl-js/api/

mapboxgl.accessToken = 'pk.eyJ1Ijoib3dlbmxhbWIiLCJhIjoiY2lleWljcnF4MDBiOXQ0bHR0anRvamtucSJ9.t3YnHHqvQZ8Y0MTCNy0NNw';
var ankara = [34.51773317578852, 39.06580893051233];
var place = Array(2);

var localUrl = "http://localhost:8080/";
var herokuUrl = "https://weatherpin.herokuapp.com/";

this.map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v9',
  center: ankara, // starting position
  zoom: 4 // starting zoom
});

map.on('click', function (e) {
  // console.log('A click event has occurred at ' + e.lngLat);

  var lang = e.lngLat.lat;
  var lot = e.lngLat.lng;
  var query = "?lang=" + lang + "&lat=" + lot;

  popup(e.lngLat);
  $.get(herokuUrl+"mapPin/" + query, function (data, status) {
    // alert("Data: " + data + "\nStatus: " + status);
    // console.log(data);
    place[0] = data.map;
    place[1] = data.weather;



  });
});

//http://localhost:8000/mapPin?lang=37.21322953818863&lat=37.365656577636854

// Add zoom and rotation controls to the map.
// var nav = new mapboxgl.NavigationControl();

// map.addControl(nav, 'top-right');

var popup = (coordinate) => new mapboxgl.Popup({
  closeOnClick: true,
  closeButton: true,
  anchor: 'bottom-left',
}).setLngLat(coordinate)
  .setHTML('<div class="popup-content"><div class="pin-icon"><i class="fas fa-map-pin"></i></div><div class="vl"></div><div>' + place[0] + '<br>derece' + place[1] + ',' + '</div></div>')
  .addTo(this.map);


