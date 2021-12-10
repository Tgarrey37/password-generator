// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
var specialCharacters = ["!@#$%^&*()_+{}[]"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["1234567890"];
var masterArray = [];
var randomPassword = "";
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  var passwordLength = prompt(
    "Please enter the number of characters you want for you new password. It may be between 8 and 128 characters."
  );
  if (!passwordLength || passwordLength <= 8 || passwordLength >= 128) {
    return alert("Invalid Response. Please try again.");
  }

  var useLowerCase = confirm(
    "Do you want your new password to include lowercase letters?"
  );
  if (useLowerCase === true) {
    masterArray += lowerCase;
  } else if (useLowerCase === false) {
    masterArray;
  }
  var useUpperCase = confirm(
    "Do you want your new password to include uppercase letters?"
  );
  if (useUpperCase === true) {
    masterArray += upperCase;
  } else if (useUpperCase === false) {
    masterArray;
  }
  var useNumbers = confirm("Do you want your new password to include numbers?");
  if (useNumbers === true) {
    masterArray += numbers;
  } else if (useNumbers === false) {
    masterArray;
  }
  var useSpecialCharacters = confirm(
    "Do you want your new password to include special characters?"
  );
  if (useSpecialCharacters === true) {
    masterArray += specialCharacters;
  } else if (useSpecialCharacters === false) {
    masterArray;
  }
  var randomPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    randomPassword +=
      masterArray[Math.floor(Math.random() * masterArray.length)];
    console.log(Math.floor(Math.random() * masterArray.length));
    console.log(randomPassword);
  }
  return randomPassword;
}
