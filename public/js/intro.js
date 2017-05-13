function initialize() {
  var myCenter=new google.maps.LatLng(36.107082,-112.132148);
  var mapProp = {
    center:myCenter,
    zoom:7,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker=new google.maps.Marker({
	position:myCenter,
        icon:'img/adam.gif',
        animation:google.maps.Animation.BOUNCE
  });
marker.setMap(map);
}
