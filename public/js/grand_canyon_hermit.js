var myCenter=new google.maps.LatLng(36.074473, -112.155140);
function initialize() {
  var mapProp = {
    center:myCenter,
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker=new google.maps.Marker({
	position:myCenter,
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
  });
  var marker2=new google.maps.Marker({
      position:new google.maps.LatLng(36.072314, -112.166062),
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
  });
  var marker3=new google.maps.Marker({
      position:new google.maps.LatLng(36.056599, -112.136600),
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
  });
marker.setMap(map);  
marker2.setMap(map);
marker3.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'resize', initialize);


