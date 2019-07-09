$('#reg-form').submit(function (e) {
	let name = $('#name').val();
	let phone = $('#phone').val();
	let email = $('#email').val();
	let message = $('#message').val();
	let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let phoneReg = /[0-9 -()+]+$/;
	if ( name == "" ) {
     	$('#nameIncorrect').html('<p>Enter the name!</p>');
     	e.preventDefault();
     	return false;
	} else if ( phone == "" || (!phoneReg.test(phone)) ) {
		$('#nameIncorrect').html('');
		$('#phoneIncorrect').html('<p>enter the telephone number!</p>');
		$('#nameForm').css('display', 'block');
		e.preventDefault();
     	return false;
	} else if ( email == "" || (!emailReg.test(email)) ) {
		$('#phoneIncorrect').html('');
		$('#emailIncorrect').html('<p>Email incorrect!</p>');
		$('#phoneForm').css('display', 'block');
		e.preventDefault();
     	return false;
     } else if ( message == "" ) {
     	$('#emailIncorrect').html('');
     	$('#emailForm').css('display', 'block');
     	$('#textIncorrect').html('<p>Enter the message!</p>');
     	e.preventDefault();
     	return false;
     } else if ( message.length < 10 || message.length > 1000 ) {
     	$('#textIncorrect').html('');
     	$('#textIncorrect').html('<p>The message must be between 10 and 1000 characters!</p>');
     	e.preventDefault();
     	return false;
     }
     	else {
     	$('#textIncorrect').html('');
     	$('#messageForm').css('display', 'block');
     }
});