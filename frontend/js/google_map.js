// Source: http://jsfiddle.net/9vnpP/2/

var gmarkers = [];

function initialize() {

	var mapOptions = {
	  zoom: 13,
      center: new google.maps.LatLng(10.329446, 123.908084),
      mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var locations = [
	  ['Ayala Cebu City', 10.329446, 123.908084, 1],
	  ['SM Cebu City', 10.312212, 123.918311, 2],
	  ['IT Park Cebu City', 10.330414, 123.906845, 3]  
	]		

	var marker, i;
  	var infowindow = new google.maps.InfoWindow();

  	google.maps.event.addListener(map, 'click', function() {
        infowindow.close();
    });

  	
    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map        
      });

      gmarkers.push(marker);

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

}

google.maps.event.addDomListener(window, 'load', initialize);

