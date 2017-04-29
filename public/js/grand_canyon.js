var myCenter = new google.maps.LatLng(36.056621, -112.136697);
function initialize() {
    var mapProp = {
        center: myCenter,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var depot = new google.maps.Marker({
        position: myCenter,
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var mather = new google.maps.Marker({
        position: new google.maps.LatLng(36.061673, -112.107761),
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var yavapai = new google.maps.Marker({
        position: new google.maps.LatLng(36.065940, -112.116774),
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var mesquite = new google.maps.Marker({
        position: new google.maps.LatLng(36.055563, -112.145996),
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var lookout = new google.maps.Marker({
        position: new google.maps.LatLng(36.057787, -112.141310),
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var kolb = new google.maps.Marker({
        position: new google.maps.LatLng(36.057978, -112.142576),
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var maswik = new google.maps.Marker({
        position: new google.maps.LatLng(36.053563, -112.144315),
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var tovar = new google.maps.Marker({
        position: new google.maps.LatLng(36.057410, -112.137684),
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var arizona = new google.maps.Marker({
        position: new google.maps.LatLng(36.056898, -112.140602),
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var visitor = new google.maps.Marker({
        position: new google.maps.LatLng(36.059206, -112.109220),
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var hopi = new google.maps.Marker({
        position: new google.maps.LatLng(36.074543, -112.155046),
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var mohave = new google.maps.Marker({
        position: new google.maps.LatLng(36.072305, -112.166070),
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var bright = new google.maps.Marker({
        position: new google.maps.LatLng(36.058126, -112.146624),
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var store = new google.maps.Marker({
        position: new google.maps.LatLng(36.053386, -112.121395),
        icon: 'adam.gif',
        animation: google.maps.Animation.BOUNCE
    });
    var village = new google.maps.Circle({
        center: myCenter,
        radius: 4000,
        strokeColor: "#0000FF",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0000FF",
        fillOpacity: 0.4
    });
    var canyon = new google.maps.Circle({
        center: new google.maps.LatLng(36.337648, -112.851906),
        radius: 100000,
        strokeColor: "#EEEE00",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#EEEE00",
        fillOpacity: 0.4
    });

    village.setMap(map);
    canyon.setMap(map);
    depot.setMap(map);
    mather.setMap(map);
    yavapai.setMap(map);
    maswik.setMap(map);
    lookout.setMap(map);
    kolb.setMap(map);
    mesquite.setMap(map);
    tovar.setMap(map);
    arizona.setMap(map);
    visitor.setMap(map);
    hopi.setMap(map);
    mohave.setMap(map);
    bright.setMap(map);
    store.setMap(map);

    var hopiwindow = new google.maps.InfoWindow({
        content: "Hopi Point"
    });
    google.maps.event.addListener(hopi, 'click', function() {
        hopiwindow.open(map, hopi);
    });
    var matherwindow = new google.maps.InfoWindow({
        content: "Mather Point"
    });
    google.maps.event.addListener(mather, 'click', function() {
        matherwindow.open(map, mather);
    });
    var yavapaiwindow = new google.maps.InfoWindow({
        content: "Yavapai Point"
    });
    google.maps.event.addListener(yavapai, 'click', function() {
        yavapaiwindow.open(map, yavapai);
    });
    var maswikwindow = new google.maps.InfoWindow({
        content: "Maswik Lodge"
    });
    google.maps.event.addListener(maswik, 'click', function() {
        maswikwindow.open(map, maswik);
    });
    var lookoutwindow = new google.maps.InfoWindow({
        content: "Lookout Point"
    });
    google.maps.event.addListener(lookout, 'click', function() {
        lookoutwindow.open(map, lookout);
    });
    var kolbwindow = new google.maps.InfoWindow({
        content: "Kolb Studio"
    });
    google.maps.event.addListener(kolb, 'click', function() {
        kolbwindow.open(map, kolb);
    });
    var mesquitewindow = new google.maps.InfoWindow({
        content: "Mesquite at Maswik Lodge"
    });
    google.maps.event.addListener(mesquite, 'click', function() {
        mesquitewindow.open(map, mesquite);
    });
    var tovarwindow = new google.maps.InfoWindow({
        content: "El Tovar"
    });
    google.maps.event.addListener(tovar, 'click', function() {
        tovarwindow.open(map, tovar);
    });
    var brightwindow = new google.maps.InfoWindow({
        content: "Bright Angel Trail"
    });
    google.maps.event.addListener(bright, 'click', function() {
        brightwindow.open(map, bright);
    });
    var arizonawindow = new google.maps.InfoWindow({
        content: "Arizona Room"
    });
    google.maps.event.addListener(arizona, 'click', function() {
        arizonawindow.open(map, arizona);
    });
    var visitorwindow = new google.maps.InfoWindow({
        content: "Grand Canyon Visitor Center"
    });
    google.maps.event.addListener(visitor, 'click', function() {
        visitorwindow.open(map, visitor);
    });
    var mohavewindow = new google.maps.InfoWindow({
        content: "Mohave Point"
    });
    google.maps.event.addListener(mohave, 'click', function() {
        mohavewindow.open(map, mohave);
    });
    var storewindow = new google.maps.InfoWindow({
        content: "General Store"
    });
    google.maps.event.addListener(store, 'click', function() {
        storewindow.open(map, store);
    });
    var depotwindow = new google.maps.InfoWindow({
        content: "Grand Canyon Depot"
    });
    google.maps.event.addListener(depot, 'click', function() {
        depotwindow.open(map, depot);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'resize', initialize);


