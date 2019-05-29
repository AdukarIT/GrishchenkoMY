
//Task1
function placeOrder() {
 	var name = document.getElementById('name');
 	var minutes = document.getElementById('minutes');
 	if (name.value !== "" && minutes.value !== "" && !isNaN(minutes.value)) {
 		alert('Good values!');
 	} else {
 		alert('Name and Minutes fields cannot be empty. Minutes field supports only numbers.');
 	}
}

//Task2
function cleanInput() {
 	var input = document.getElementById('task2_input');
 	input.value = '';
}

function sendEmail() {
 	var input = document.getElementById('task2_input');
 	window.open('mailto:address@domen.domen?subject=Hello!&body=' + input.value);
}

//Task3 and 4
function validateForm(formName) {
	var validatedFields = [];
	var invalidFields = [];
	for (var item in document.forms[formName]) {
		if (document.forms[formName][item] && document.forms[formName][item] != null  && document.forms[formName][item].type) {
			var value = document.forms[formName][item].value;
			var type = document.forms[formName][item].type;
			if (!validatedFields.includes(document.forms[formName][item])) {
				document.forms[formName][item].style.borderColor = "green";
				//invalidFields.splice( invalidFields.indexOf(document.forms[formName][item]), 1);
				switch (type) {
					case 'text':
						if (value === '') {
							//alert('Text field cannot be blank!');
							document.forms[formName][item].style.borderColor = "red";
							invalidFields.push(document.forms[formName][item]);
						}
						break;
					case 'email':
						if (!validateEmail(value)) {
							//alert('Please check the email address!');
							document.forms[formName][item].style.borderColor = "red";
							invalidFields.push(document.forms[formName][item]);
						}
						break;
					case 'date':
						var regEx = /^\d{4}-\d{2}-\d{2}$/;
						if (!regEx.test(value)) {
							//alert('Date is incorrect!');
							document.forms[formName][item].style.borderColor = "red";
							invalidFields.push(document.forms[formName][item]);
						}
						break;
				}
			}
			validatedFields.push(document.forms[formName][item]);
			console.log(invalidFields);
		}
	}
	if (invalidFields.length === 0) {
		alert('Welcome back!');
	}
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Task5
function processText() {
	var text = document.getElementById('initialText').value;
	var target = document.getElementById('whatId').value;
	var value = document.getElementById('valueId').value;
	var result = text.replace(new RegExp(target, 'g'), value);
	document.getElementById('initialText').value = result;
}

//Task6
function validateTime() {
	var timeString = document.getElementById('timeStringId').value;
	var regEx = /^ *([0-1]?[0-9]|[2][0-3])\.[0-5][0-9] *(a|p|A|P)(m|M) *$/;
	alert(regEx.test(timeString) ? 'Valid Time Format' : 'Ooops! Invalid format.');
}

//Task7
function removeDuplicates() {
	var text = document.getElementById('duplicatesStringId').value;
	var result = text.replace(/(\b\S.+\b)(?=.*\1)/g, "").trim();
	document.getElementById('duplicatesStringId').value = result;
}

