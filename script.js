// Assignment code here
// arrays of the criteria
var upperCaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numericChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '-'];

var generatePassword = function () {
  // Generating password length
  var lengthInput = Number(prompt('choose between 8-128 characters'));
  for (var i = 0; i <= 100; i++) {
    // making sure it's not below 8
    if (lengthInput < 8) {
      alert('must be at least 8 characters, try again');
      lengthInput = Number(prompt('choose between 8-128 characters'));
      // making sure it's not above 128
    } else if (lengthInput > 128) {
      alert('must be below 128 characters, try again');
      lengthInput = Number(prompt('choose between 8-128 characters'));
    }
  }
  console.log(lengthInput);
  // asking for character types
  var lowerCaseInput = prompt('do you want to include lowercase?').toLowerCase();
  var upperCaseInput = prompt('do you want to include uppercase?').toLowerCase();
  var numericInput = prompt('do you want to include numeric?').toLowerCase();
  var specialInput = prompt('do you want to include special characters?').toLowerCase();

  console.log(lowerCaseInput, upperCaseInput, numericInput, specialInput);

  // option 1: all criteria wanted
  if (lowerCaseInput === 'yes' && upperCaseInput === 'yes' && numericInput === 'yes' && specialInput === 'yes') {
    // combining all arrays into 1 array
    var allChars = upperCaseChars.concat(lowerCaseChars).concat(numericChars).concat(specialChars);
    var password = '';
    // generating random index from the array
    for (var i = 0; i < lengthInput; i++) {
      var randomNumber = allChars[Math.floor(Math.random() * allChars.length)];
      console.log(randomNumber);
    }

  }


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
