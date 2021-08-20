var textArea = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var charactersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charactersLower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+-=/";

function generatePassword() {
  
  var choice = prompt("How many characters long would you like your password to be? (8-128 characters permited)");
  if (!choice) return;
  if (choice < 8 || choice > 128 || isNaN(choice) /*|| parseInt(choice)*/) {
    alert("Please enter a numeric value between 8 and 128 characters long.");
    return generatePassword();
  }

  var wantUpper = confirm("Would you like capital letters in your password?");
  var wantLower = confirm("Would you like lower case letters in your password?");
  var wantNumber = confirm("Would you like numbers in your password?");
  var wantSymbol = confirm("Would you like special characters in your password?");

  var password = "";
  var possible = "";

  if (wantUpper) possible += charactersUpper;
  if (wantLower)  possible += charactersLower;
  if (wantNumber)  possible += numbers;
  if (wantSymbol)  possible += symbols;
  
  // can also keep it simple w/ if (!possible) since these are the contents of the outcome "possible".
  if (!wantUpper && !wantLower && !wantNumber && !wantSymbol) {
    alert("Well, your password has to contain something silly... try again.");
    return generatePassword();
  }  
  
  for (var i = 0; i < choice; i++) {
    var randomChar = possible.charAt(Math.floor(Math.random() * possible.length));
    password += randomChar;
  }

  textArea.innerHTML = password;
}

generateBtn.addEventListener("click", generatePassword);