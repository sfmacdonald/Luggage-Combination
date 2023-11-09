// Assignment code here

var generateButton = document.getElementById('generateButton');

// Event listener for the "Generate Password" button
generateButton.addEventListener('click', function () {
  // Show password criteria prompts, get user input(s) and validate
  var length = parseInt(prompt("Enter the desired length of the password (must be 8 to 128 characters):"));

  if (isInputValid(length)) {
    var includeLowercase = confirm("Include lowercase letters?");
    var includeUppercase = confirm("Include uppercase letters?");
    var includeNumeric = confirm("Include numerical values?");
    var includeSpecial = confirm("Include special characters?");

    if (includeLowercase || includeUppercase || includeNumeric || includeSpecial) {
      // Generate a password based on user selected criteria
      var newPassword = generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);
      displayPassword(newPassword);
    } else {
      showError("At least one character type must be selected.");
    }
  } else {
    showError("Invalid password length. Length must be between 8 and 128 characters.");
  }
});

function isInputValid(length) {
  // Validate the password length
  return length >= 8 && length <= 128;
}

function generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  var characters = "";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=";

  // Include selected character types
  characters += includeLowercase ? lowercaseChars : "";
  characters += includeUppercase ? uppercaseChars : "";
  characters += includeNumeric ? numericChars : "";
  characters += includeSpecial ? specialChars : "";

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}

function displayPassword(password) {
  // Display the generated password in the textarea
  var passwordTextArea = document.getElementById('password');
  passwordTextArea.value = password;
}

function showError(message) {
  // Display an error message for invalid input
  alert("Error: " + message);
}

// Get references to the #generate element
var generateButton = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateButton.addEventListener("click", writePassword);