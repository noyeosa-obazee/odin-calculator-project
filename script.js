const operationDisplay = document.querySelector('#display');
const operationResult = document.querySelector('#result');

const numberButton = [...document.querySelectorAll('.number-btn')];
const operatorButton = [...document.querySelectorAll('.operator-btn')];
const operationButton = document.querySelector('#perform-operation-btn');
const clearButton = document.querySelector('#clear-btn');
const clearAllButton = document.querySelector('#clear-all-btn');

let expression = '';
let currentResult;

function operate(expr) {
    const tokens = expr.replace(/\s+/g, '').split(/([+\-x/])/).filter(token => token);
    let result = parseFloat(tokens[0]);
    // let keeper = result;

    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens [i];
        const nextNumber = parseFloat(tokens[i + 1]);
        // const previousResult = result;

        switch (operator) {
            case '+':
                result += nextNumber;
                break;
            case '-':
                result -= nextNumber;
                break;
            case 'x':
                result *= nextNumber;
                break;
            case '/':
                if (nextNumber === 0) throw new Error('Division by zero');
                result /= nextNumber;
                break;
            default:
            throw new Error(`Unknown operator ${operator}`);
        }

        // keeper = result;
    }

    return result;
}

numberButton.forEach(function (btn) { 
btn.addEventListener('click', function (e) {
expression +=e.target.textContent
operationDisplay.textContent = expression
})})

operatorButton.forEach(function (btn) { 
btn.addEventListener('click', function (e) {
    if(!/[x/+-\-]$/.test(expression)) {

        if(/[x/+\\-]/.test(expression)) {
      const result = operate(expression);
  operationResult.textContent = result;
        }

       expression +=e.target.textContent
       operationDisplay.textContent = expression
}})})


operationButton.addEventListener('click', function () {
  const result = operate(expression);
  operationResult.textContent = result;
})

clearAllButton.addEventListener('click', function () {
    expression = '';
    operationResult.textContent = '';
    operationDisplay.textContent = '';
})

clearButton.addEventListener('click', function () {
    expression = expression.slice(0, -1);
    operationDisplay.textContent = expression;
})

