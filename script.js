// Assignment Code ---- document & querySelector selects the id from index.html
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/////////////

function writePassword () {
  var choice = prompt("How many characters long would you like your password to be? (8-128 characters permited)");

  //if (!choice) return;

  if (choice >= 8) {
    console.log(choice);
  } else if (choice <= 8);
  console.log("Please select a number from 8 - 128.");
}

//

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numner = "0123456789";
var sybmbol = "!@#$%^&*_-+=?/";
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
