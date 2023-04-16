// Assignment code here


var generatePassword = function () {
  // Generating password length
  var lengthInput = prompt('choose between 8-128 characters');
  for (var i = 0; i <= 100; i++) {
    // making sure it's not below 8
    if (lengthInput < 8) {
      alert('must be at least 8 characters, try again');
      lengthInput = prompt('choose between 8-128 characters');
      // making sure it's not above 128
    } else if (lengthInput > 128) {
      alert('must be below 128 characters, try again');
      lengthInput = prompt('choose between 8-128 characters');
    }
  }
  console.log(lengthInput);

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
