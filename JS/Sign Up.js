function checkName(name) {
	var reg = new RegExp("^[A-Z][a-z]{2,15}$"); // uppercase first letter, lowercase rest, at least 3 letters, at most 16
	return reg.test(name);
}

function checkEmail(email) {
	var reg = new RegExp("^\\S{3,32}@\\S{3,16}\\.\\S{2,6}$"); // [string size 3-32]@[string size 3-16].[string size 2-6]
	return reg.test(email);
}

function checkPassword(password, rPassword) {
	if (password != rPassword)
		return false;
	var reg = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,16}$"); // at least one uppercase, at least one number, size at least 8
	return reg.test(password);
}

function checkRadio(radio) {
	var i = 0;
	var check = false;
	while (!check && i < radio.length) {
		if (radio[i].checked)
			check = true;
		i++;
	}
	return check;
}

function formValidation()
{
	var firstName = document.getElementsByName("firstName")[0].value;
	var lastName = document.getElementsByName("lastName")[0].value;
	// var password = document.getElementsByName("password")[0].value;
	// var rPassword = document.getElementsByName("rPassword")[0].value;
	var email = document.getElementsByName("email")[0].value;
	var radio = document.getElementsByName("gender");
	
	var boolFirstName = checkName(firstName);
	var boolLastName = checkName(lastName);
	var boolPassword = checkPassword(password, rPassword);
	var boolEmail = checkEmail(email);
	var boolRadio = checkRadio(radio);
	
	if (!boolFirstName) {
		alert("Invalid First Name!");
		return false;
	}
	if (!boolLastName) {
		alert("Invalid Last Name!");
		return false;
	}
	/* if (!boolPassword) {
		alert("Invalid or Unmatched Passwords!");
		return false;
	} */
	if (!boolEmail) {
		alert("Invalid email!");
		return false;
	}	
	if (!boolRadio) {
		alert("Please select a gender!");
		return false;
	}	
	return true;
}