// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", ";", "/", "?", ".", ">", "<"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var pswdLength;
var upperCaseVerify;
var numberVerify;
var specialVerify;

function SetLength(){
  pswdLength = prompt("How many characters do you want in your password?");

    if (pswdLength<8 || pswdLength>128 || (isNaN)(pswdLength)) {
      alert("The password length must be between 8-128 characters...try again");
      SetLength();
    }
    else{
      alert("Answer the next 3 questions to generate a password");
    }
    return pswdLength;
}
function SetUpperCase(){
  upperCaseVerify = prompt("Do you want uppercase letters in the password?");
}
function SetNumber(){
  numberVerify = prompt("Do you want numbers in the password?");
}
function SetSpecial(){
  specialVerify = prompt("Do you want special characters in the password?");
}

function generatePassword(){
  SetLength();
  console.log(pswdLength);
  SetUpperCase();
  console.log(upperCaseVerify);
  SetNumber();
  console.log(numberVerify);
  SetSpecial();
  console.log(specialVerify);
var characters = lowerCase;
var password = "";
if (upperCaseVerify && numberVerify && specialVerify){
  characters += upperCase + number + specialChar;
}else if (upperCaseVerify && numberVerify){
  characters += upperCase + number;
}else if (numberVerify && specialVerify){
  characters += number + specialChar;
}else if (upperCaseVerify && specialVerify){
  characters += upperCase + specialChar;
}else if (upperCaseVerify){
  characters += upperCase;
}else if(numberVerify){
  characters += number;
}else if (specialVerify){
  characters += specialChar;
}else{
  characters === lowerCase;
}
  for(var i = 0; i < pswdLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
