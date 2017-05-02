function initialize() {
    var myCenter = new google.maps.LatLng(35.251946, -112.191594);
    var mapProp = {
        center: myCenter,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: myCenter,
        icon:'img/adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(35.249975, -112.189137),
        icon:'img/adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(35.208917, -112.128283),
        icon:'img/adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var marker4 = new google.maps.Marker({
        position: new google.maps.LatLng(35.138495, -111.671942),
        icon:'img/adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    marker.setMap(map);
    marker2.setMap(map);
    marker3.setMap(map);
    marker4.setMap(map);
}
