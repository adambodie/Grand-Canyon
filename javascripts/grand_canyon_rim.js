var myCenter = new google.maps.LatLng(36.056876, -112.140570);
function initialize() {
    var mapProp = {
        center: myCenter,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: myCenter,
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
        
    });
    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(36.057787, -112.141310),
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(36.057978, -112.142576),
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var marker4 = new google.maps.Marker({
        position: new google.maps.LatLng(36.053563, -112.144315),
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var marker5 = new google.maps.Marker({
        position: new google.maps.LatLng(36.055515, -112.145978),
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    marker.setMap(map);
    marker2.setMap(map);
    marker3.setMap(map);
    marker4.setMap(map);
    marker5.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'resize', initialize);


