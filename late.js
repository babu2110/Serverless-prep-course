// start coding your function here!

function running_late(date) {
	let getHour = parseInt(date.substring(date.indexOf(':')-2, date.indexOf(':')));
	if(22 <= parseInt(getHour) && 24 >= parseInt(getHour)){
		return "It is late!";
	}
	return "It is still early!";
}

exports.running_late = running_late;

