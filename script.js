var pLength = 0
var pSpecial = Boolean
var pLower = Boolean
var pUpper = Boolean
var pNumber = Boolean

var pLength = prompt('How long is your password?',  '8-128')

var pUpper = confirm('Would you like uppercase letters?')

var pLower = confirm('Would you like lowercase letters?')

var pNumber = confirm('Would you like numbers?')

var pSpecial = confirm('Would you like special characters?')

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER



generateBtn.addEventListener('newValue', () => {
    const length = +pLength.value
})
    

console.log(pLength)

function generatePassword(hasLower, hasNumber, hasSpecial, hasUpper); {

}.;

 
//generator functions - http://www.net-comber.com/charset.html  example of perfect charset too the left

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

console.log(getRandomLower());


function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

console.log(getRandomUpper());


function getRandomSpecial() {
    const special = '!@#$%^&*(){}[]=<>/,.';
    return special[Math.floor(Math.random() * special.length)];
}

console.log(getRandomSpecial());


function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

console.log(getRandomNumber());


if (pLength > 7 && pLength < 129); 
    
// } else {
    
// }

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    special: getRandomSpecial,
    number: getRandomNumber
};



const hasUpper = pUpper
const hasLower = pLower
const hasNumber = pNumber
const hasSpecial = pSpecial
