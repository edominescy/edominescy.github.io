var days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months=["January", "February", "March", "April", "May", "June", "July", "August", "September",
"October", "November", "December"];
var messages=["Mentally prepare for the week ahead!", "Survive.", "Almost halfway through the week!", "Happy Hump Day!", "Almost Friday!", "Happy Friday!", "YOU day :)"];

var d = new Date();

function date(){
	var mnum = d.getMonth();
	var dnum = d.getDay();
	var daynum = d.getDate();
	var year = d.getFullYear();
	var hours = d.getHours();
	var min = d.getMinutes();
	var td = "AM";
	if (min<10){
		min='0' + min;
	}
	var nd;
	if (hours>=12){
		hours=hours-12;
		td = "PM";
	}
	if (hours==0){
		hours=12;
	}

	var numend;
	if ((daynum==1)||(daynum==21)||(daynum==31)){
		numend="st";
	}
	else if ((daynum==2)||(daynum==22)){
		numend="nd";
	}
	else {
		numend="th";
	}

	document.write("Today is " + days[dnum] + " the " + daynum + numend + " of " + months[mnum] + " " + year + " and the time is " + hours + ":" + min + " " + td + ". The message of the day: " + messages[dnum]);
}

date();