// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function generatePassword(){

var userInput = window.prompt('How many characters you want on your password? Must be between 8-128 characters.')

if ( isNaN(userInput)){
  window.alert('Thats not a number')
  
}

if(userInput > 128){
  window.alert("Password must have more than 8 characters and less than 128 characters")
}
else if (userInput < 8){
  window.alert("Password must have more than 8 characters and less than 128 characters")
  return
}

var userNumbers = window.confirm( 'User wants to use numbers')
var userSymbols = window.confirm( 'User wants to use Symbols')
var userLowercase = window.confirm( 'User wants to use Lowercase')
var userUppercase = window.confirm( 'User wants to use  Uppercase')
 
var numbers = [ 0,1,2,3,4,5,6,7,8,9]
var symbols = [ '*', '&', '^',"%","$","#",'@','!']
var lowercase = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h,j','k','l','z,','x','c','v','b','n','m']
var uppercase = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G',',H','J','K','L','Z','X','C','V','B','N','M']

var cart = []

 if (userNumbers === true){
  cart = cart.concat(numbers)
}
else{
  window.alert('Your password will not have numbers')  
}

 if(userSymbols === true){
  cart = cart.concat(symbols)
}
else{
  window.alert(' Your password will not have symbols')
}

 if (userLowercase === true){
cart = cart.concat(lowercase)
}
else{
  window.alert('Your password will not have lowercase')
}

 if(userUppercase === true){
  cart = cart.concat(uppercase)
}
else{
  window.alert("Your password will not have uppercase")
}

if(userNumbers === false && userSymbols === false && userLowercase === false && userUppercase === false) {
  window.alert('User must select at least one character type')
  return
}
let randomPassword = ''
for (let i = 0; i < userInput; i++) {
  let= randomGen = (Math.floor(Math.random() * cart.length))
  randomPassword = randomPassword + cart[randomGen]
}

return randomPassword

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
