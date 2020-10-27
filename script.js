// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var specialChar = ["!@#$%^&*()_-+={}[];:'`~<,>.?/|"];
var number = ["0123456789"];
var pswdLength;
var upperCaseVerify;
var numberVerify;
var specialVerify;
var lowerCaseVerify;

function SetLength(){
  pswdLength = prompt("How many characters do you want in your password?");

    if (pswdLength<8 || pswdLength>128 || (isNaN)(pswdLength)) {
      alert("The password length must be between 8-128 characters...try again");
      SetLength();
    }
    else{
      alert("Answer the next 4 questions to generate a password");
    }
    return pswdLength;
  }
function SetUpperCase(){
  upperCaseVerify = confirm("Do you want uppercase letters in the password?");
}
function SetNumber(){
  numberVerify = confirm("Do you want numbers in the password?");
}
function SetSpecial(){
  specialVerify = confirm("Do you want special characters in the password?");
}
function SetLowerCase(){
  lowerCaseVerify = confirm("Do you want lowercase letters in the password?");
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
  SetLowerCase();
  console.log(lowerCaseVerify);
  
var characters;
var password = "";
if (upperCaseVerify && numberVerify && specialVerify && lowerCaseVerify){
  characters += upperCase + number + specialChar + lowerCase;
}else if (upperCaseVerify && numberVerify && specialVerify){
  characters += upperCase + number + specialChar;
}else if (upperCaseVerify && numberVerify && lowerCaseVerify){
  characters += upperCase + number + lowerCase;
}else if (upperCaseVerify && lowerCaseVerify && specialVerify){
    characters += upperCase + lowerCase + specialChar;
}else if (lowerCaseVerify && numberVerify && specialVerify){
  characters += number + lowerCase + specialChar;
}else if (numberVerify && specialVerify){
  characters += number + specialChar;
}else if (upperCaseVerify && specialVerify){
  characters += upperCase + specialChar;
}else if (lowerCaseVerify && specialVerify){
  characters += lowerCase + specialChar;
}else if (upperCaseVerify && lowerCaseVerify){
  characters += upperCase + lowerCase;
}else if (lowerCaseVerify && numberVerify){
  characters += lowerCase + number;
}else if (upperCaseVerify && numberVerify){
  characters += upperCase + number;
}else if (upperCaseVerify){
  characters += upperCase;
}else if(numberVerify){
  characters += number;
}else if (specialVerify){
  characters += specialChar;
}else {
  characters === lowerCase; 
}
  for(var i = 0; i < pswdLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password1;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
