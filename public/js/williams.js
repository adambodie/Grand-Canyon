function initialize() {
  var myCenter=new google.maps.LatLng(35.251949,-112.191578);
  var mapProp = {
    center:myCenter,
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker=new google.maps.Marker({
	position:myCenter,
        icon: 'img/adam.gif',
        animation: google.maps.Animation.BOUNCE
  });
marker.setMap(map);
}
