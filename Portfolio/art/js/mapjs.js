var venueMap;
function init(){


	 venueMap = new google.maps.Map(document.getElementById("Mappage"), {
		center: {lat: 34.327401,lng: -88.723341},
		zoom: 11
});
	 var markerpos = new google.maps.LatLng(34.327401,-88.723341);

	 var startpos = new google.maps.Marker({
	 	position: markerpos,
	 	map: venueMap,
	 	icon: "img/mapmarker.jpg"
	 });

}