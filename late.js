// start coding your function here!

function running_late(date) {
	if(date.indexOf("PM") != -1) {
		let getHour = date.substring(0, date.indexOf(':'));
		if(10 <= parseInt(getHour) && 12 >= parseInt(getHour)){
			return "It is late!";
		}
	}
	return "It is still early!";
}

exports.running_late = running_late();

