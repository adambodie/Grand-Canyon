
function initialize() {
    var myCenter = new google.maps.LatLng(36.059210, -112.109306);
    var mapProp = {
        center: myCenter,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: myCenter,
        icon: 'img/adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(36.061673, -112.107761),
        icon: 'img/adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(36.065940, -112.116774),
        icon: 'img/adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var marker4 = new google.maps.Marker({
        position: new google.maps.LatLng(36.053520, -112.144325),
        icon: 'img/adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    marker.setMap(map);
    marker2.setMap(map);
    marker3.setMap(map);
    marker4.setMap(map);
}
