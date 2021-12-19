$(function () {
    // sidenav
    $('.sidenav').sidenav();

    // languages dropdown
    $(".dropdown-trigger").dropdown({
        hover: false
    });
});


/*
  /* Contact us page - Google map 
  function medioClinicMap(){

    var myLatLng = { lat: 51.5, lng: -0.15};

    var mapOptions = {
        zoom: 10,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });

    var devwindow = new google.maps.InfoWindow({
        content: "Example location"
    });

    devwindow.open(map, marker);
}
*/

$(function () {
    // sidenav
    $('.sidenav').sidenav();

    // languages dropdown
    $(".dropdown-trigger").dropdown({
        hover: false
    });
});


  /* Contact us page - Google map */
  function initMap() {

    var mapOptions = {
        zoom: 6,
        center: { lat: 49.5, lng: 24.01 },
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: {
            lat: 49.8,
            lng: 24.01,
        },
        map: map
    });

    marker.setMap(map);

    var InfoWindow = new google.maps.InfoWindow({
        content: "Our main office"
    });

    InfoWindow.open(map, marker);
}
