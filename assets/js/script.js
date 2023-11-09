// Assignment code here

var generateButton = document.getElementById('generateButton');

// Event listener for the "Generate Password" button
generateButton.addEventListener('click', function() {
  // Show password criteria prompts, get user input(s) and validate

  if (isInputValid) {
    // Generate a password based on selected criteria
    var newPassword = generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);
    // Display the password (either in an alert or on the page)
    displayPassword(newPassword);
  } else {
    // Display an error message if input is invalid
    showError();
  }
})

function generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  // Generate the password based on selected criteria and return it to the user
}

function displayPassword(password) {
  // Display the generated password
}

function showError() {
  // Display an error message for invalid input
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