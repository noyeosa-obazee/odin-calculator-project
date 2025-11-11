const operationDisplay = document.querySelector('#display');
const operationResult = document.querySelector('#result');

const numberButton = [...document.querySelectorAll('.number-btn')];
const operatorButton = [...document.querySelectorAll('.operator-btn')];
const operationButton = document.querySelector('#perform-operation-btn');
const clearButton = document.querySelector('#clear-btn');
const clearAllButton = document.querySelector('#clear-all-btn');

let expression = '';

function operate(expr) {
    const tokens = expr.replace(/\s+/g, '').split(/([+\-x/])/).filter(token => token);
    let startIndex = 0;
    let result = 0;

    if(tokens[0] === '-' && tokens.length > 1) {
        result = -parseFloat(tokens[1]);
        startIndex = 2;
    }
    else if (tokens[0] === '+' && tokens.length > 1) {
        result = parseFloat(tokens[1]);
        startIndex = 2;
    }
    else {
        result = parseFloat(tokens[0]);
        startIndex = 1;
    }

    for (let i = startIndex; i < tokens.length; i += 2) {
        const operator = tokens [i];
        const nextNumber = parseFloat(tokens[i + 1]);

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
    if(!expression && (e.target.textContent === 'x' || e.target.textContent === '/')) {
        return;
    }
    else if(!/[x/+-\-]$/.test(expression)) {

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

