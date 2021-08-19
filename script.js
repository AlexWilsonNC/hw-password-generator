var textArea = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var charactersAll = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=/";
//var charactersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//var charactersLower = "abcdefghijklmnopqrstuvwxyz";
//var numbers = "0123456789";
//var symbols = "!@#$%^&*()_+-=/";

function generatePassword() {
  var choice = prompt("How many characters long would you like your password to be? (8-128 characters permited)");
  if (!choice) return;
  //var password = ""; 
  if (choice < 8 || choice > 128 || isNaN(choice) /*&& parseInt(choice)*/) {
  alert("Please enter a numeric value between 8 and 128 characters long.");
  return generatePassword();
} 
/*  var choice = prompt("Would you like to have Upper Case letters in your password? yes or no");
  if (!choice) return;
  if (choice == "yes") {
    var choice = prompt("Would you like to have Lower Case letters in your password?");

  }   */

  var password = ""; 
  for (var i = 0; i < choice; i++) {
    var randomChar = charactersAll[Math.floor(Math.random() * 77)];
    password += randomChar;
  }
  textArea.innerHTML = password;
}

generateBtn.addEventListener("click", generatePassword);