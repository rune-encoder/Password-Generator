// Object: Contains organized list of letters, numbers, and special characters used in our Password Generator.
// Variable Characters: Contains Key-Values for Numbers, Upper and Lower case letters and Special Characters.
var characters = {
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  special: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "?", "<", ">", ",", ".", "/", ";", ":", "", "", "[", "]"]
}

// This function is used to determine User's password choices: 
// Choices: 1. Number of characters in password, 2. Requests: Numbers, 3. Requests Special Characters. 
function determineUserPass() {
  var messageNum = [];
  var messageSpe = [];
  var messageUpp = [];

  // Here user will: 
  // 1. Input requested number of characters (Returns a number), 
  var charLength = parseInt(prompt(("How many characters do you want? ")));
  if (charLength) {
    window.alert("The user has chosen a total of " + charLength + " characters for the generated password.")
  } else if (!charLength) {
    window.alert("The user has chosen to cancel operation.")
    return;
  }
  window.alert ("Lowercase letters are included and selected by default.");
  // 2. Input if they requests Uppercase letters (Returns true or false),
  var hasUpperCase = confirm("Click OK if you'd like uppercase letters generated. ");
  if (hasUpperCase) {
    window.alert("Uppercase letters WILL be included in generated password.")
    messageUpp = "Yes";
  } else {
    window.alert("Uppercase letters WILL NOT be included in generated password.")
    messageUpp = "No";
  }
  // 3. Input if they requests number characters (Returns true or false),
  var hasNumberChar = confirm("Click OK if you'd like numeric characters generated. ");
  if (hasNumberChar) {
    window.alert("Numeric Characters WILL be included in generated password.")
    messageNum = "Yes";
  } else {
    window.alert("Numeric Characters WILL NOT be included in generated password.")
    messageNum = "No";
  }
  // 4. Input if they requests special characters (Returns true or false).
  var hasSpecialChar = confirm("Click OK if you'd like special characters generated. ");
  if (hasSpecialChar) {
    window.alert("Special Characters WILL be included in generated password.")
    messageSpe = "Yes";
  } else {
    window.alert("Special Characters WILL NOT be included in generated password.")
    messageSpe = "No";
  }

  // Message is displayed with all of the user's choices.
  window.alert("User's Choices: \nNumber of Characters: " + charLength + "\nOpted for Uppercase Letters: " + messageUpp + "\nOpted for Number Characters: " + messageNum + "\nOpted for Special Characters: " + messageSpe);

  // We then collect all of the user's options and make an object to use these options later.
  var userPassOptions = {
    charLength: charLength,
    hasUpperCase: hasUpperCase,
    hasNumberChar: hasNumberChar,
    hasSpecialChar: hasSpecialChar
  };
  return userPassOptions
}

// This Function creates a random number based on the specified arrays length.
// The number represents the index in an specified array chosen randomly
function randomize(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  // Note: Brackets are used to indicate a index from an array. 
  // The random number generated will be used obtain a random index from our character array.
    return array[randomIndex]
}

// This function creates the user's desired password.
function createPassword () {
  // Options: will produce an object with the user's chosen properties. 
  // The function used to determine the user's options is called here and declared as a variable.
  var options = determineUserPass();
  // Chosen Characters: Will contain a list of all the possible and requested characters used for the password.
  var chosenCharacters = [];
  // Guaranteed Characters: Will contain a number, special character or both that will added to the password to gaurentee user's chosen options.
  var guaranteedChar = [];
  // Result Characters: Will contain the *FINAL PRODUCT*. The desired password.
  var result = [];

  // If user desires Uppercase letters, Numbers and Special Characters: 
  if (options.hasUpperCase && options.hasNumberChar && options.hasSpecialChar) {
    // 1. Join all Letters, Numbers, and Special Characters into one array.
    chosenCharacters = characters.lowerCase.concat(characters.upperCase, characters.numbers, characters.special);
    // 2. Create one random Uppercase letter, Number and one Special Character: Will be added to password no matter what.
    guaranteedChar.push(randomize(characters.upperCase));
    guaranteedChar.push(randomize(characters.numbers));
    guaranteedChar.push(randomize(characters.special));
  
  // If user desires uppercase letters and numbers: 
  } else if (options.hasUpperCase && options.hasNumberChar && !options.hasSpecialChar) { 
    chosenCharacters = characters.lowerCase.concat(characters.upperCase, characters.numbers);
    guaranteedChar.push(randomize(characters.upperCase));
    guaranteedChar.push(randomize(characters.numbers));

  // If user desires uppercase letters and and special characters: 
  } else if (options.hasUpperCase && !options.hasNumberChar && options.hasSpecialChar) {
    chosenCharacters = characters.lowerCase.concat(characters.upperCase, characters.special);
    guaranteedChar.push(randomize(characters.upperCase));
    guaranteedChar.push(randomize(characters.special));
  
  // If user desires numbers and special characters: 
  } else if (!options.hasUpperCase && options.hasNumberChar && options.hasSpecialChar) {
    chosenCharacters = characters.lowerCase.concat(characters.numbers, characters.special);
    guaranteedChar.push(randomize(characters.numbers));
    guaranteedChar.push(randomize(characters.special));
  
  // If user desires uppercase letters: 
  } else if (options.hasUpperCase && !options.hasNumberChar && !options.hasSpecialChar) {
    chosenCharacters = characters.lowerCase.concat(characters.upperCase);
    guaranteedChar.push(randomize(characters.upperCase));

  // If user desires numbers: 
  } else if (!options.hasUpperCase && options.hasNumberChar && !options.hasSpecialChar) {
    chosenCharacters = characters.lowerCase.concat(characters.numbers);
    guaranteedChar.push(randomize(characters.numbers));

  // If user desires special characters: 
  } else if (!options.hasUpperCase && !options.hasNumberChar && options.hasSpecialChar) {
    chosenCharacters = characters.lowerCase.concat(characters.special);
    guaranteedChar.push(randomize(characters.special));
  
  // If user desires only lower case letters: 
  } else {
    chosenCharacters = characters.lowerCase;
  }
  
  // Random characters are generated and chosen here.
  for (var i = 0; i < options.charLength; i++) {
    // Calls function to generate random index number used to pull a character from our chosen characters array.
    randomChar = randomize(chosenCharacters);
    // Pushes random generated character into our results list.
    // Process is repeated based on user's chosen password length.
    result.push(randomChar);
  }

  // Will choose our guaranteed character(s) created in our if statement that will be exchanged starting from the first index in our results.
  for (var i = 0; i < guaranteedChar.length; i++) {
    result[i] = guaranteedChar[i];
  }

  // Using result.join will combine our all our individually created password strings into one whole string.
  // Results in our password. *Final Product*
  return result.join("")
}

// Assignment Code
// Will target our "Generate" button using the id="generate".
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // This calls our function which creates the password.
  var password = createPassword();
  // The textarea in the document is targeted with the id="password".
  var passwordText = document.querySelector("#password");
  // The password created is inputed into the text area inside id="password".
  passwordText.value = password;
}

// Add event listener to generate button. 
// Once we click the button with the id="generate" our code will be ran.
generateBtn.addEventListener("click", writePassword);

//!!!To run our functions and code CLICK THE GENERATE BUTTON!!!
