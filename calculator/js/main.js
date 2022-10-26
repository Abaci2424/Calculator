let output = document.querySelector('.output');
let allButtons = document.querySelector('.buttons');
let clear = document.querySelector('.clear');

let firstNumber = '';
let secondNumber = '';
let operation = '';
let finish = false;


clear.addEventListener('click',() => {
  firstNumber = '';
  secondNumber = '';
  operation = '';
  finish = false;
  output.textContent = '0';
});

let numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let operationArr = ['-', '+', '&times;', '&divide;']

allButtons.addEventListener('click', e => {
  if (!e.target.classList.contains('.calc_btn')) return;
  if (e.target.classList.contains('.clear')) return;

  output.textContent = '';
  let key = e.target.textContent;
  
//  0-9 / .
  if (numbersArr.includes(key)) {
    firstNumber += key;
    console.log(firstNumber, secondNumber, operationArr)
  }
})