let output = document.getElementById("sum-el");

function add() {
  let number1 = document.getElementById("num-1").value;
  let number2 = document.getElementById("num-2").value;
  let num1 = parseInt(number1);
  let num2 = parseInt(number2);
  let result = num1 + num2;
  output.textContent = "Sum: " + result;
}

function subtract() {
  let number1 = document.getElementById("num-1").value;
  let number2 = document.getElementById("num-2").value;
  let num1 = parseInt(number1);
  let num2 = parseInt(number2);
  let result = num1 - num2;
  output.textContent = "Subtract: " + result;
}

function divide() {
  let number1 = document.getElementById("num-1").value;
  let number2 = document.getElementById("num-2").value;
  let num1 = parseInt(number1);
  let num2 = parseInt(number2);
  let result = num1 / num2;
  output.textContent = "Divide: " + result;
}

function multiply() {
  let number1 = document.getElementById("num-1").value;
  let number2 = document.getElementById("num-2").value;
  let num1 = parseInt(number1);
  let num2 = parseInt(number2);
  let result = num1 * num2;
  output.textContent = "Multiply: " + result;
}
