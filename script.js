
var characters = {
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  special: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
}

var lettersChar = characters.upperCase.concat(characters.lowerCase);

var userPassOptions = {
  charLength: parseInt(prompt(("How many characters do you want? "))),
  hasNumberChar: confirm("Click OK if you'd like special characters generated."),
  hasSpecialChar: confirm("Click OK if you'd like numeric characters generated. ") 
}

//Console.Log Check
console.log(characters.numbers);
console.log(characters.upperCase);
console.log(characters.lowerCase);
console.log(characters.special);
console.log(" ");
console.log(lettersChar);
console.log(" ");
console.log(userPassOptions.charLength);
console.log(typeof userPassOptions.charLength);
console.log(userPassOptions.hasNumberChar);
console.log(userPassOptions.hasSpecialChar);
console.log(" ");

if (userPassOptions.hasNumberChar === true && userPassOptions.hasSpecialChar === true) {
  var chosenCharacters = lettersChar.concat(characters.numbers, characters.special);
} else if (userPassOptions.hasNumberChar === true && userPassOptions.hasSpecialChar === false) { 
  chosenCharacters = lettersChar.concat(characters.numbers);
} else if (userPassOptions.hasNumberChar === false && userPassOptions.hasSpecialChar === true) {
  chosenCharacters = lettersChar.concat(characters.special);
} else {
  chosenCharacters = lettersChar;
}

 console.log(chosenCharacters);
 console.log(typeof chosenCharacters);
 console.log(" ");


// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();

//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// writePassword();

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


