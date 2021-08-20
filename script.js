var textArea = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
//var charactersAll = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=/";
var charactersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charactersLower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+-=/";
var charactersAll = [];

function generatePassword() {
  var password = "";
  var possible = "";

  var choice = prompt("How many characters long would you like your password to be? (8-128 characters permited)");
  if (!choice) return;
  if (choice < 8 || choice > 128 || isNaN(choice) /*&& parseInt(choice)*/) {
    alert("Please enter a numeric value between 8 and 128 characters long.");
    return generatePassword();
  }

  wantUpper = confirm("Would you like capital letters in your password?");
  wantLower = confirm("Would you like lower case letters in your password?");
  wantNumber = confirm("Would you like numbers in your password?");
  wantSymbol = confirm("Would you like special characters in your password?");

  if (wantUpper) {
    var randomChar = Math.floor(Math.random() * charactersUpper.length);
    var option = charactersUpper[randomChar];
    possible = possible.concat(charactersUpper);
    charactersAll.push(option);
  }

  if (wantLower) {
    var randomChar = Math.floor(Math.random() * charactersLower.length);
    var option = charactersLower[randomChar];
    possible = possible.concat(charactersLower);
    charactersAll.push(option);
  }

  if (wantNumber) {
    var randomChar = Math.floor(Math.random() * numbers.length);
    var option = numbers[randomChar];
    possible = possible.concat(numbers);
    charactersAll.push(option);
  }

  if (wantSymbol) {
    var randomChar = Math.floor(Math.random() * symbols.length);
    var option = symbols[randomChar];
    possible = possible.concat(symbols);
    charactersAll.push(option);
  }
  
  for (var i = 0; i < length - charactersAll.length; i++) {
    var randomChar = Math.floor(Math.random() * possible.length);
    password += possible[randomChar];
  }
  textArea.innerHTML = password;

  password += charactersAll.join('');

  console.log('POSSIBLE:', possible);
  console.log('PASSWORD:', password);
  console.log('STORED:', charactersAll);
  charactersAll = [];

  return password;
}

generateBtn.addEventListener("click", generatePassword);