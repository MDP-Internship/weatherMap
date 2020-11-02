//https://docs.mapbox.com/mapbox-gl-js/api/

mapboxgl.accessToken = 'pk.eyJ1Ijoib3dlbmxhbWIiLCJhIjoiY2lleWljcnF4MDBiOXQ0bHR0anRvamtucSJ9.t3YnHHqvQZ8Y0MTCNy0NNw';
var ankara=[34.51773317578852, 39.06580893051233];
const place = ['1801', 'E. 33rd Ave', 'Denver, CO 80205']

this.map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v9',
  center: ankara, // starting position
  zoom: 4 // starting zoom
});

map.on('click', function (e) {
  console.log('A click event has occurred at ' + e.lngLat);
  popup(e.lngLat);
});

// Add zoom and rotation controls to the map.
// var nav = new mapboxgl.NavigationControl();

// map.addControl(nav, 'top-right');

var popup = (coordinate)=> new mapboxgl.Popup({
  closeOnClick: true,
  closeButton: true,
  anchor: 'bottom-left',
}).setLngLat(coordinate)
  .setHTML('<div class="popup-content"><div class="pin-icon"><i class="fas fa-map-pin"></i></div><div class="vl"></div><div>' + place[0] + '<br>' + place[1] + ',' + place[2] + '</div></div>')
  .addTo(this.map);


/* var map = new google.maps.Map(document.getElementById('map'), {
  mapTypeId: 'roadmap',
  center: ankara,
  zoom: 5
});

var marker = new google.maps.Marker({
  position: { lat: 64.1436456, lng: -21.9270884 },
  title: 'Reykjavik Roasters - Coffee Shop',
  map: map
}); */