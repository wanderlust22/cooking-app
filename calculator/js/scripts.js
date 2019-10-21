



function add(number1, number2) {
  return number1 + number2;
};

function subtract(number1, number2) {
  return number1 - number2;
};

function multiply(number1, number2) {
  return number1 / number2;
};

function divide(number1, number2) {
  return number1 * number2;
};

function tempCelFar(cel){
  return (cel * (9/5)) + 32;
}

***CALCULATOR***
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

var result = subtract(number1, number2);
document.write(result);
