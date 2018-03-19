$( document ).ready( function() {
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -11.729697, lng: -75.28832},
      zoom: 10
    });
    var marker = new google.maps.Marker({
      position: {lat: parseFloat(-12.084824), lng: parseFloat(-76.971121)},
      map: map,
      title: 'Hello World!'
    });
});
