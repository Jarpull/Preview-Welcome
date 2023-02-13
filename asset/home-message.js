function startTime() {
	var today = new Date();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();

	hour = checkTime(hours);
	minute = checkTime(minutes);
	second = checkTime(seconds);

	document.getElementById('time').innerHTML = hour + ':' + minute + ':' + second;

	var time = setTimeout(startTime, 250);
}

function checkTime(i) {
	if (i < 10) {
		i = '0' + i;
	}
	return i;
}

var i = 0;

function typeWriter() {
	var today = new Date();

	var message = 'Good ';

	var morningMessage = 'Morning, ';
	var afternoonMessage = 'Afternoon, ';
	var eveningMessage = 'Evening, ';
	var nightMessage = 'Night, ';

	var hour = today.getHours();

	if (hour > 19 || hour < 4) message += nightMessage;
	else if (hour > 14) message += eveningMessage;
	else if (hour > 10) message += afternoonMessage;
	else message += morningMessage;

	message += 'Vinny';
	currentDate = new Date()
	date = currentDate.getDate()
	month = currentDate.getMonth()

	/*if (localStorage.getItem('color') === 'rgba(0, 0, 0, 0.5)' && date == 14 && month == 1) {
		$('#message').attr('class', 'popup glitch');
		$('#message').attr('data-text', 'Happy Valentine!');
		$('#message').css('visibility', 'visible');
		message = '';
		$('#message').hide().delay(5000).fadeIn(1000);
	} else {
		$('#message').css('visibility', 'visible');
		$('#message').hide().fadeIn(1000);
	}
	*/

	var speed = 100;
	if (i < message.length) {
		document.getElementById('message').innerHTML += message.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}
