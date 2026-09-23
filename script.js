const add = (...num) => {
  const result = num.reduce((acc, currentValue) => acc + currentValue);
  return result;
};

const subtract = (...num) => {
  const result = num.reduce((acc, currentValue) => acc - currentValue);
  return result;
};

const multiply = (...num) => {
  const result = num.reduce((acc, currentValue) => acc * currentValue);
  return result;
};

const divide = (...num) => {
  const result = num.reduce((acc, currentValue) => acc * currentValue);
  return result;
};

let num1;
let num2;
let operator;

const operate = (num1, operator, num2) => {
  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "x":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
  }

  return result;
};

console.log(operate(2, "+", 4));
