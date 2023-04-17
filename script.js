// Assignment code here
// stirngs of the criteria
var upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
var numericChars = '0123456789';
var specialChars = '!@#$%^&*-';

var generatePassword = function () {
  // Generating password length
  var lengthInput = Number(prompt('choose between 8-128 characters'));
  while (lengthInput < 8 || lengthInput > 128) {
    alert('must be between 8-128 characters, try again');
    lengthInput = Number(prompt('choose between 8-128 characters'));
  }

  var selectedChars = '';
  // asking for character types
  var lowerCaseInput = prompt('do you want to include lowercase?').toLowerCase();
  if (lowerCaseInput === 'yes') {
    selectedChars += lowerCaseChars;
    console.log(selectedChars);
  }
  var upperCaseInput = prompt('do you want to include uppercase?').toLowerCase();
  if (upperCaseInput === 'yes') {
    selectedChars += upperCaseChars;
    console.log(selectedChars);
  }
  var numericInput = prompt('do you want to include numeric?').toLowerCase();
  if (numericInput === 'yes') {
    selectedChars += numericChars;
    console.log(selectedChars);
  }
  var specialInput = prompt('do you want to include special characters?').toLowerCase();
  if (specialInput === 'yes') {
    selectedChars += specialChars;
    console.log(selectedChars);
  }

  var password = '';
  // generating random character
  for (var i = 0; i < lengthInput; i++) {
    var randomNumber = selectedChars[Math.floor(Math.random() * selectedChars.length)];
    password += randomNumber;
  }
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
