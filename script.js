const btnNum = document.querySelectorAll(".num-btn");
const btnOperator = document.querySelectorAll(".btn-operator");
const btnEqual = document.querySelector(".btn-equal");
const display = document.querySelector(".display");
const reset = document.querySelector(".reset");

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
  const result = num.reduce((acc, currentValue) => acc / currentValue);
  return result;
};

let num1 = "";
let num2 = "";
let operator = "";
let textOperation = "";

const operate = (num1, operator, num2) => {
  let result;
  const firstNumber = Number(num1);
  const numberTwo = Number(num2);
  switch (operator) {
    case "+":
      result = add(firstNumber, numberTwo);
      break;
    case "-":
      result = subtract(firstNumber, numberTwo);
      break;
    case "x":
      result = multiply(firstNumber, numberTwo);
      break;
    case "/":
      result = divide(firstNumber, numberTwo);
      break;
  }

  return result;
};

btnNum.forEach((btn) => {
  btn.addEventListener("click", () => {
    const displayContent = display.textContent;
    if (
      displayContent.includes("+") ||
      displayContent.includes("x") ||
      displayContent.includes("/") ||
      displayContent.includes("-")
    ) {
      num2 += btn.textContent;
      textOperation = `${num1}${operator}${num2}`;
      display.textContent = textOperation;
    } else {
      num1 += btn.textContent;
      textOperation = `${num1}`;
      display.textContent = textOperation;
    }
  });
});

btnOperator.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (num1 === "") {
      return;
    }
    operator = btn.textContent;
    textOperation = `${num1}${operator}`;
    display.textContent = textOperation;
  });
});

btnEqual.addEventListener("click", () => {
  if (num2 === "0") {
    display.textContent = "Error";
    return;
  } else if (num2 === "" && operator === "") {
    return;
  }
  const result = operate(num1, operator, num2);
  display.textContent = result;
  textOperation = "";
  num1 = result;
  operator = "";
  num2 = "";
});

reset.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  operator = "";
  textOperation = "";
  display.textContent = "0";
});
