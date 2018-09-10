var homeEl = document.getElementById("homenav");
var homeDiv = document.getElementById("home");
var gallEl = document.getElementById("gallerynav");
var gallDiv = document.getElementById("gallery");

function changeView(page){
	if (page === "homenav"){
		gallDiv.style.display = "none";
		homeDiv.style.display = "block";
		$("#About").css("display", "none");
		$("#Contact").css("display", "none");
		$("#Mappage").css("display","none");
		$("#Map").css("display","none");
	}
	if (page === "gallerynav"){
		gallDiv.style.display = "block";
		homeDiv.style.display = "none";
		$("#About").css("display", "none");
		$("#Contact").css("display", "none");
		$("#Mappage").css("display","none");
		$("#Map").css("display","none");
	}
	if (page === "#aboutnav"){
		gallDiv.style.display = "none";
		homeDiv.style.display = "none";
		$("#About").css("display","block");
		$("#Contact").css("display", "none");
		$("#Mappage").css("display","none");
		$("#Map").css("display","none");
	}
	if (page === "#contactnav"){
		gallDiv.style.display = "none";
		homeDiv.style.display = "none";
		$("#About").css("display", "none");
		$("#Contact").css("display", "block");
		$("#Mappage").css("display","none");
		$("#Map").css("display","none");
	}
	if (page === "#mapnav"){
		gallDiv.style.display = "none";
		homeDiv.style.display = "none";
		$("#About").css("display", "none");
		$("#Contact").css("display", "none");
		$("#Mappage").css("display","block");
		$("#Map").css("display","block");
	}

}

homeEl.addEventListener("click", function(){
	changeView("homenav");
}, false);

gallEl.addEventListener("click", function(){
	changeView("gallerynav");
}, false);

$(document).ready(function(){
$("#aboutnav").on('click', function() {
	changeView('#aboutnav');
});
$("#contactnav").on('click', function(){
	changeView("#contactnav");
});
$("#mapnav").on('click', function() {
	changeView("#mapnav");
	init();
});
});