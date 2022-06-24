const operator = prompt("Enter choice: + ,- ,/ or * ");
const number1 = parseFloat(prompt(" Enter the first number:"));
const number2 = parseFloat(prompt("Enter the second number:"));

let result;

if (operator == '+') {
  result = number1 + number2;
}
 else if (operator ==  '-') {
  result = number1 - number2;
}
 else if (operator == '*') {
  result = number1 * number2;
}
 else if (operator == '/') {
    result = number1 * number2;
}
else{
    document.write('invalid operator');
}

alert(result);
