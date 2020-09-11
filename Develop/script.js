// Define the variables for each criteria
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "1234567890";

 // Use let because the variable will be vary along the code
let symbol = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let choices = "";
let askLength = "";

// Changes for user friendly
const lowerCase = letters.toLowerCase();

// Add quotation mark to the symbol array
// symbol = symbol.concat('"');
let symbolArray = symbol.split("");
symbolArray.push('"');
// console.log(symbol);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password from generatePassword function to the password input
function writePassword() {
  
  //  Asking user criteria length for creating the password
  let askLength = "";
  while(askLength < 8 || askLength > 128){
    askLength = prompt("How long you want to make your password ?");
    if(askLength < 8){
      alert("Please put at least 8 characters");
    } else if(askLength > 128){
      alert("Please put no more than 128 characters");
    } 
  }

  //  Asking user criteria length for creating the password
  let askLower = confirm("Do you want to include lowercase?");
  let askUpper = confirm("Do you want to include uppercase?");
  let askNumber = confirm("Do you want to include numbers?");
  let askSymbol = confirm("Do you want to include symbols?");
  
  // While loop to make new alert to make it more user friendly
  // let askLower = "";
  // let askUpper = "";
  // let askNumber = "";
  // let askSymbol = "";
  // while(askLower === false && askUpper === false && askNumber === false && askSymbol === false){
  //   askLower = confirm("Do you want to include lowercase?");
  //   askUpper = confirm("Do you want to include uppercase?");
  //   askNumber = confirm("Do you want to include numbers?");
  //   askSymbol = confirm("Do you want to include symbols?");
  //   if(askLower === false && askUpper === false && askNumber === false && askSymbol === false){
  //     alert("Please select at least one validations!")
  //   }
  //   return "";
  // }
  
  // Generating the password after generatePassword function done with it's process
  var password = generatePassword(askLower, askUpper, askNumber, askSymbol, askLength);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//  New function to generate the random password
function generatePassword (a, b, c, d, askLength){ 

  if(a === false && b === false && c === false && d === false){
    alert("Please select at least one validations!")
    return ("Invalid Input Validations! Please press the Generate Password button again to!"); 
  }

  // Conditional statement to store each validation to the new variable
  if(a === true){
    choices = choices.concat(lowerCase);
  }
  if(b === true){
    choices = choices.concat(letters);
  }
  if(c === true){
    choices = choices.concat(number);
  }
  if(d === true){
    choices = choices.concat(symbol);
  }

  // Make choices variable to become an array
  let giantArray = choices.split("");
  let pass = "";

  // For loop statement to create a random password based on user length criteria
  for(i = 0; i < parseInt(askLength); i++){
    let randomizer = giantArray[Math.floor(Math.random() * giantArray.length)];
    pass = pass.concat(randomizer);
  } 

  // To empty the existing array everytime user generate new password
  choices = "";
  return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
