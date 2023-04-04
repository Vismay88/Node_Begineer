// Simple Calculator

const prompt = require('prompt-sync')();

let number1 = prompt("Enter the first number:");
let number2 = prompt("Enter the second number:");

console.log(".....................................");
console.log('1.Addition\n');
console.log('2.Substracation\n');
console.log('3.Multiply\n');
console.log('4.Divison\n');

let options=prompt("Choose The Opearation you want to perform:");
 
let option=Number(options)

switch (option) {
  case 1:
    var result = number1 + number2;
    break;

  case 2:
    var result = number1 - number2;
    break;

  case 3:
    var result = number1 * number2;
    break;

  case 4:
    if(number2 === '0' ){
        console.log("denominator can not be zero");
    }
    var result = number1 / number2;
    break;

   default:
    var result='Please Select the valid input';
    break;
};

 console.log('The final output is:'+ result);
