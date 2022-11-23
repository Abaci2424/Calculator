const output = document.querySelector(".output");
const allButtons = document.querySelector(".buttons");
const numberBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operation]');
const equal = document.querySelector('[data-equal]');
const clear = document.querySelector('[data-reset]');
const percent = document.querySelector('[data-percent]');
const history = document.querySelector(".history");


let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

numberBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    let number = e.target.dataset.number;

    if (isFirstValue == false) {
      getFirstValue(number);
    }
    if (isSecondValue == false) {
      getSecondValue(number);
    }
  });
});

function getFirstValue(e) {
  output.textContent = "";
  firstValue += e;
  output.textContent = firstValue;
  firstValue = +firstValue;
  historyDisplay();
}

function getSecondValue(e) {
if (firstValue != '' && sign != '') {
  secondValue += e;
  output.textContent = secondValue;
  history.textContent = secondValue
  secondValue = +secondValue;
  historyDisplay();
 
} 
// if(firstValue != '' && secondValue != '' && sign != '') {
//   resultValue = resultValue;
// }
}

function detSign() {
  operationBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
      sign = e.target.dataset.operation;
      output.textContent = sign;
      isFirstValue = true;
      historyDisplay();
    });
  });
} 
detSign()

equal.addEventListener('click', () => {
  output.textContent = '';
  switch (sign) {
        case '+':
          resultValue = firstValue + secondValue;
          break;
        case '-':
          resultValue = firstValue - secondValue;
          break;
        case '/':
          if (secondNumber === "0") {
            firstValue = "";
            isFirstValue = false;
            secondValue = "";
            isSecondValue = "";
            sign = "";
            resultValue = 0;
            history.textContent = "";
                      output.textContent = "0";
                      return;
                    }
          resultValue = firstValue / secondValue;
          break;
    
        case '*':
          resultValue = firstValue * secondValue;
          break;
    
        default:
          break;
        }
        output.textContent = resultValue;
        firstValue = resultValue;
        secondValue = '';

        resultLength();
});

function resultLength() {
  resultValue = JSON.stringify(resultValue);

  if(resultValue.length >= 8) {
    resultValue = JSON.parse(resultValue);
    output.textContent = resultValue.toFixed(3);
  }
}

percent.addEventListener('click', () => {
  output.textContent = '';
  if(firstValue != '') {
    resultValue = firstValue / 100;
    firstValue = resultValue;
  }
  if(firstValue != '' && secondValue != '' && sign != '') {
    resultValue = resultValue / 100;
  }
})

function historyDisplay() {
  history.textContent += output.textContent;
}

function clearAll() {
  firstValue = "";
  isFirstValue = false;
  secondValue = "";
  isSecondValue = "";
  sign = "";
  resultValue = 0;
  output.textContent = 0;
  history.textContent = "";
}

clear.addEventListener("click", clearAll);




// let result = null;
// let value = null;
// let currentOperation = null;



// function sum(a, b) {
//   return a + b;
// }

// function subtraction(a, b) {
//   return a - b;
// }

// function division(a, b) {
//   return a / b;
// }

// function multiplication(a, b) {
//   return a * b;
// }

// // нажали на кнопку, data-number='1', data-operation='sum',

// function handleClick(e) {
//  let number = parseInt(e.target.dataset.number);
//  let operation = e.target.dataset.operation;
//  historyDisplay();

//    if (!result && number) {
//     result = number;
//     return;
//   }

//   if (number) {
//     value = number;
//     output.textContent = value;
//     console.log(value);
    
//   } else if (operation) {
//     currentOperation = operation;
//     output.textContent = currentOperation;
//     console.log(currentOperation);
    
   
//     switch (currentOperation) {
//     case '+':
//       result = sum(result, value);
//       break;
//     case '-':
//       result = subtraction(result, value);
//       break;

//     case '/':
//       result = division(result, value);
//       break;

//     case '*':
//       result = multiplication(result, value);
//       break;

//     default:
//       break;
//     }
 
// }



// let firstNumber = "";
// let secondNumber = "";
// let operation = "";
// let finish = false;

// function clearAll() {
//   firstNumber = "";
//   secondNumber = "";
//   operation = "";
//   finish = false;
//   output.textContent = 0;
//   history.textContent = '';
// }

// const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
// const operationArr = ["-", "+", "×", "÷", "%"];


// allButtons.addEventListener("click", (e) => {
//   if (!e.target.classList.contains("calc_btn")) return;
  
//   let value = e.target.value;
//   console.log(value);
  
//   if (value === "reset") {
//     return clear.addEventListener("click", clearAll);
//   }
//  if (value !== "=") {
//   let result = history.textContent += value;
//   console.log(result);
// }

//   // ( 0-9 / . )true
//   if (numbersArr.includes(value)) {
//     if (secondNumber === "" && operation === "") {
//       firstNumber += value;
//       output.textContent = firstNumber;
//     } else if (firstNumber !== "" && secondNumber !== "" && finish) {
//         secondNumber = value;
//       output.textContent = secondNumber;
//     } else {
//       secondNumber += value;
//       output.textContent = secondNumber;
//     }
//     return;
//   }

//   // (+, -, ×, /)true
//   if (operationArr.includes(value)) {
//     operation = value;
//     output.textContent = operation;
//   }
//   // (=)true
//   if (value === "=") {

//     if (secondNumber === "") secondNumber = firstNumber;
//     switch (operation) {
//       case "+":
//         firstNumber = +firstNumber + +secondNumber;
//         break;
//       case "-":
//         firstNumber = firstNumber - secondNumber;
//         break;
//       case "*":
//         firstNumber = firstNumber * secondNumber;
//         break;
//       case "÷":
//         if (secondNumber === "0") {
//           firstNumber = "";
//           secondNumber = "";
//           operation = "";
//           output.textContent = "Error!";
//           return;
//         }
//         firstNumber = firstNumber / secondNumber;
//         break;
//       case "%":
//         firstNumber = secondNumber * (firstNumber / 100);
//         firstNumber = firstNumber.toFixed(2);
//         break;
//     }

//     finish = true;
//     output.textContent = firstNumber;
//   }
// });
