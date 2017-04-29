var myCenter=new google.maps.LatLng(36.107082,-112.132148);
function initialize() {
  var mapProp = {
    center:myCenter,
    zoom:7,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker=new google.maps.Marker({
	position:myCenter,
        icon:'adam.gif',
        animation:google.maps.Animation.BOUNCE
  });
marker.setMap(map);  
}
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'resize', initialize);


