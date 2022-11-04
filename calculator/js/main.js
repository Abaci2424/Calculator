const output = document.querySelector(".output");
const allButtons = document.querySelector(".buttons");
const clear = document.querySelector(".clear");
const history = document.querySelector(".history")

let firstNumber = "";
let secondNumber = "";
let operation = "";
let finish = false;

function clearAll() {
  firstNumber = "";
  secondNumber = "";
  operation = "";
  finish = false;
  output.textContent = 0;
  history.textContent = '';
}

const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operationArr = ["-", "+", "×", "÷", "%"];


allButtons.addEventListener("click", (e) => {
  if (!e.target.classList.contains("calc_btn")) return;
  
  let value = e.target.value;
  console.log(value);
  
  if (value === "reset") {
    return clear.addEventListener("click", clearAll);
  }
 if (value !== "=") {
  let result = history.textContent += value;
  console.log(result);
}

  // ( 0-9 / . )true
  if (numbersArr.includes(value)) {
    if (secondNumber === "" && operation === "") {
      firstNumber += value;
      output.textContent = firstNumber;
    } else if (firstNumber !== "" && secondNumber !== "" && finish) {
        secondNumber = value;
      output.textContent = secondNumber;
    } else {
      secondNumber += value;
      output.textContent = secondNumber;
    }
    return;
  }

  // (+, -, ×, /)true
  if (operationArr.includes(value)) {
    operation = value;
    output.textContent = operation;
  }
  // (=)true
  if (value === "=") {
    if (secondNumber === "") secondNumber = firstNumber;
    switch (operation) {
      case "+":
        firstNumber = +firstNumber + +secondNumber;
        break;
      case "-":
        firstNumber = firstNumber - secondNumber;
        break;
      case "*":
        firstNumber = firstNumber * secondNumber;
        break;
      case "÷":
        if (secondNumber === "0") {
          firstNumber = "";
          secondNumber = "";
          operation = "";
          output.textContent = "Error!";
          return;
        }
        firstNumber = firstNumber / secondNumber;
        break;
      case "%":
        firstNumber = secondNumber * (firstNumber / 100);
        firstNumber = firstNumber.toFixed(2);
        break;
    }

    finish = true;
    output.textContent = firstNumber;
  }
});
