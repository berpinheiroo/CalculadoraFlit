const display = document.querySelector('.displayNumber');
const buttons = document.querySelectorAll('button');
let currentNumber = '';
let currentOperation = '';
let previousNumber = '';
let previousOperation = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;
    
    if (/\d/.test(buttonValue)) {
      currentNumber += buttonValue;
      display.textContent += buttonValue;
    } else if (buttonValue === '+' || buttonValue === '-') {
      currentOperation = buttonValue;
      display.textContent += ` ${buttonValue} `;
      previousNumber = currentNumber;
      currentNumber = '';
      previousOperation = '';
    } else if (buttonValue === 'x' || buttonValue === '/') {
      currentOperation = buttonValue;
      display.textContent += ` ${buttonValue} `;
      previousNumber = currentNumber;
      currentNumber = '';
      previousOperation = currentOperation;
    } else if (buttonValue === '=') {
      if (previousOperation === 'x') {
        currentNumber = parseFloat(previousNumber) * parseFloat(currentNumber);
      } else if (previousOperation === '/') {
        currentNumber = parseFloat(previousNumber) / parseFloat(currentNumber);
      }
      if (currentOperation === '+') {
        currentNumber = parseFloat(previousNumber) + parseFloat(currentNumber);
      } else if (currentOperation === '-') {
        currentNumber = parseFloat(previousNumber) - parseFloat(currentNumber);
      }
      display.textContent = currentNumber;
      currentNumber = '';
      currentOperation = '';
      previousNumber = '';
      previousOperation = '';
    }
  });
});
