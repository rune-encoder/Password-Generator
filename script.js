var characters = {
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  special: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
}

var lettersChar = characters.upperCase.concat(characters.lowerCase);

function determineUserPass() {
  var userPassOptions = {
    charLength: parseInt(prompt(("How many characters do you want? "))),
    hasNumberChar: confirm("Click OK if you'd like numeric characters generated. "),
    hasSpecialChar: confirm("Click OK if you'd like special characters generated. ")
  };
  return userPassOptions
}

function randomize(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex]
}

function createPassword () {
  var options = determineUserPass();
  var chosenCharacters = [];
  var guaranteedChar = [];

  if (options.hasNumberChar === true && options.hasSpecialChar === true) {
    chosenCharacters = lettersChar.concat(characters.numbers, characters.special);
    guaranteedChar.push(randomize(characters.numbers));
    guaranteedChar.push(randomize(characters.special));
  } else if (options.hasNumberChar === true && options.hasSpecialChar === false) { 
    chosenCharacters = lettersChar.concat(characters.numbers);
    guaranteedChar.push(randomize(characters.numbers));
  } else if (options.hasNumberChar === false && options.hasSpecialChar === true) {
    chosenCharacters = lettersChar.concat(characters.special);
    guaranteedChar.push(randomize(characters.special));
  } else {
    chosenCharacters = lettersChar;
  }
  console.log(typeof guaranteedChar);
  console.log(guaranteedChar.length);
  console.log(guaranteedChar);
  console.log(chosenCharacters);
  console.log(typeof chosenCharacters);
  console.log(" ");





  return; 
}

createPassword();



//Console.Log Check
// console.log(options);
// console.log(typeof options);
// console.log(characters.numbers);
// console.log(characters.upperCase);
// console.log(characters.lowerCase);
// console.log(characters.special);
// console.log(" ");
// console.log(lettersChar);
// console.log(" ");
// console.log(options.charLength);
// console.log(typeof options.charLength);
// console.log(options.hasNumberChar);
// console.log(options.hasSpecialChar);
// console.log(" ");
//Console.Log Check



//Console.Log Check
// console.log(chosenCharacters);
// console.log(typeof chosenCharacters);
// console.log(" ");
//Console.Log Check

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


