// Implementing Arithmetic Functions
function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  // Prevent division by zero
  if (number2 === 0) {
    return "'Error: Division by 0'";
  }
  return number1 / number2;
}

// Utility function to get input values and parse them
function getInputValues() {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  return { number1, number2 };
}

// Declare a Function to display result in the UI (#calculation-result span)
function displayResuslt(result) {
  document.getElementById("calculation-result").textContent = result;
}

// Event Listeners
document.getElementById("add").addEventListener("click", function () {
  const { number1, number2 } = getInputValues();
  displayResuslt(add(number1, number2));
});
document.getElementById("subtract").addEventListener("click", function () {
  const { number1, number2 } = getInputValues();
  displayResuslt(subtract(number1, number2));
});
document.getElementById("multiply").addEventListener("click", function () {
  const { number1, number2 } = getInputValues();
  displayResuslt(multiply(number1, number2));
});
document.getElementById("divide").addEventListener("click", function () {
  const { number1, number2 } = getInputValues();
  displayResuslt(divide(number1, number2));
});
