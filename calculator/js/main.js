const output = document.querySelector(".output");
const allButtons = document.querySelector(".buttons");
const clear = document.querySelector(".clear");

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
}

const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operationArr = ["-", "+", "×", "÷", "%"];

allButtons.addEventListener("click", (e) => {
  if (!e.target.classList.contains("calc_btn")) return;

  if (e.target.classList.contains("clear")) {
    return clear.addEventListener("click", clearAll);
  }

  let key = e.target.textContent;

  // ( 0-9 / . )true
  if (numbersArr.includes(key)) {
    if (secondNumber === "" && operation === "") {
      firstNumber += key;
      output.textContent = firstNumber;
    } else if (firstNumber !== "" && secondNumber !== "" && finish) {
      secondNumber = key;
      output.textContent = secondNumber;
    } else {
      secondNumber += key;
      output.textContent = secondNumber;
    }
    return;
  }

  // (+, -, ×, /)true
  if (operationArr.includes(key)) {
    operation = key;
    output.textContent = operation;
  }
  // (=)true
  if (key === "=") {
    if (secondNumber === "") secondNumber = firstNumber;
    switch (operation) {
      case "+":
        firstNumber = +firstNumber + +secondNumber;
        break;
      case "-":
        firstNumber = firstNumber - secondNumber;
        break;
      case "×":
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
    console.log(firstNumber, secondNumber, operation);
  }
});
