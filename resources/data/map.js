function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(39.214900970458984,-84.21846771240234),
      zoom:15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }

var marker = new google.maps.Marker({
  position:google.maps.LatLng(39.214900970458984,-84.21846771240234),
});

marker.setMap(map);