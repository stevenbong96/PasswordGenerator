// Define the variables
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "1234567890";
const symbol = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let choices = "";
let askLength = "";
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
  // var password = generatePassword(askLower, askUpper, askNumber, askSymbol);
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

  //  Asking user criteria for creating password
  let askLength = prompt("How long you want to make your password ?");
  // while(askLength < 8 || askLength > 128){
    if(askLength < 8){
      alert("Please put at least 8 characters");
    } else if(askLength > 128){
      alert("Please put no more than 128 characters");
    } 
  // }
  let askLower = confirm("Do you want to include lowercase?");
  let askUpper = confirm("Do you want to include uppercase?");
  let askNumber = confirm("Do you want to include numbers?");
  let askSymbol = confirm("Do you want to include symbols?");
  if(askLower === false && askUpper === false && askNumber === false && askSymbol === false){
    alert("Please select at least one validations!")
  }
  var password = generatePassword(askLower, askUpper, askNumber, askSymbol);

}

//  New function
function generatePassword (a, b, c, d){ 

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

  let giantArray = choices.split("");

  for(i = 0; i < askLength.length; i++){
    let randomizer = giantArray[Math.floor(Math.random() * giantArray.length)];
    let pass =+ randomizer;
    // pass.push(String.fromCharCode(randomizer))
    // return pass;
    // console.log(randomizer[i]);
  }
  // let generatePassword = "";

  // length = prompt("How long"); continue to line 54

  // Create new if statement for numbers and symbols

  // After choices have been made, take the choices variable that contains the entire list of options and create an array from it using .split() method. ONE BIG GIANT ARRAY!

  // Create a for loop that iterates length amount of times from line 48. 

  // Then use math.random from the big array that has been created

  // Use arr[index] or let randomizer = arr[Math.floor(Math.random() * arr.length)];

  // let pass += randomizer;
  // return pass

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Testing
// console.log(giantArray);