// Define the variables
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = "";
const number = "1234567890";
const symbol = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let choices = "";

// Changes for user friendly
const lowerCase = letters.toLowerCase();
const upperCase = letters.toUpperCase();

// Add quotation mark to the symbol array
let symbolArray = symbol.split("");
symbolArray.push('"');

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

  //  Asking user criteria for creating password
  let question1 = confirm("Do you want to include lowercase?");
  let question2 = confirm("Do you want to include uppercase?");
  let question3 = confirm("Do you want to include numbers?");
  let question4 = confirm("Do you want to include symbols?");
  var password = generatePassword(question1,  question2, question3, question4);
}

//  New function
function generatePassword (a, b, c, d){
  let generatePassword = '';
  
  length = prompt("How long you want to make your password ?");

  if(a === true){
    choices = choices.concat(lowerCase);
    console.log(choices);
  }
  if(b === true){
    choices = choices.concat(upperCase);
    console.log(choices);
  }
  if(c === true){
    choices = choices.concat(number);
    console.log(choices);
  }
  if(d === true){
    choices = choices.concat(symbol);
    console.log(choices);
  }

  const wordDam = a + b + c + d;

  let giantArray = wordDam.split("");

  for(i = 0; i < length; i+= wordDam){
    let randomizer = arr[Math.floor(Math.random() * arr.length)];
    let pass = pass +  randomizer;
    return pass;
  }
  // length = prompt("How long"); continue to line 54

  // Create new if statement for numbers and symbols

  // After choices have been made, take the choices variable that contains the entire list of options and create an array from it using .split() method. ONE BIG GIANT ARRAY!

  // Create a for loop that iterates length amount of times from line 48. 

  // Then use math.random from the big array that has been created

  // Use arr[index] or let randomizer = arr[Math.floor(Math.random() * arr.length)];

  // let pass += randomizer;
  // return pass
}
const randomArray = {
  a: randomLowerCase, b: randomUpperCase, c: randomNumber, d: randomSymbol
}

function randomLowerCase(){
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = letters.toLowerCase();
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function randomUpperCase(){
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const upperCase = letters.toUpperCase();
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function randomNumber(){
  const number = "1234567890";
  return number[Math.floor(Math.random() * number.length)];
}

function randomSymbol(){
  const symbol = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  let symbolArray = symbol.split("");
  symbolArray.push('"');
  return symbol[Math.floor(Math.random() * symbol.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Testing
// console.log(symbolArray);