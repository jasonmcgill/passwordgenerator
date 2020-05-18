// Assignment code here


var generatePassword = function() {
	do var passwordLength = parseInt(window.prompt ( "How many characters would you like your password to be ? Numbers 8-128 only"));
	while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);

	do { 
	window.alert("Please select atleast one of the following parameters")

	var lowerCase = window.confirm("Would you like to include lower case characters?")

	var upperCase = window.confirm("Would you like to include upper case characters?")

	var numbers = window.confirm("Would you like to include numbers?")

	var specChar = window.confirm("Would you like to include special characters?")

	}
	while (lowerCase === false && upperCase === false && numbers === false && specChar === false);
	
	var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

	var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	
	var ranNumbers = ["0","1","2","3","4","5","6","7","8","9"];
	
	var ranSpecChar = ["!","@","$","&","(",")"];

	var selectedParameters = [];

	
	// to push parameters into selectedParemers array

	if (lowerCase) {
		selectedParameters.push(lowerCaseLetters);
	}

	if (upperCase) {
		selectedParameters.push(upperCaseLetters);
	}

	if (numbers) {
		selectedParameters.push(ranNumbers);
	}

	if (specChar) {
		selectedParameters.push(ranSpecChar);
	}

	
function getPushedArray(randomArray) {
	return randomArray [ Math.floor(Math.random() * (randomArray.length))];
}

var passwordArray = [];

	for (var i = 0; i < passwordLength; i++) {
		var theRandomArray = getPushedArray(selectedParameters);
		var theRandomChar =  getPushedArray(theRandomArray);
		console.log(theRandomChar);
		passwordArray.push(theRandomChar)
	}
	return (passwordArray.join);
}



// Get's references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write's password to the #password input
function writePassword() {
  var password = generatePassword();
  
  // Get's references to the  #password element
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





