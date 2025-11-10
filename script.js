const operationDisplay = document.querySelector('#display');
const operationResult = document.querySelector('#result');

const numberButton = [...document.querySelectorAll('.number-btn')];
const operatorButton = [...document.querySelectorAll('.operator-btn')];
const operationButton = document.querySelector('#perform-operation-btn');

let firstNumber;
let secondNumber;
let operator;

const firstDomNumber = document.createElement('span');
const secondDomNumber = document.createElement('span');

numberButton.forEach(function (btn) { 
btn.addEventListener('click', function (e) {
if(!operator) {
    
    firstDomNumber.textContent += e.target.textContent
    firstNumber = parseInt(firstDomNumber.textContent)
    operationDisplay.appendChild(firstDomNumber);
}

else {
    
    secondDomNumber.textContent += e.target.textContent
    secondNumber = parseInt(secondDomNumber.textContent)
    operationDisplay.appendChild(secondDomNumber);
}

})})

operatorButton.forEach(function (btn) { 
btn.addEventListener('click', function (e) {
const domOperator = document.createElement('span')
domOperator.textContent = e.target.textContent
operator = domOperator.textContent
operationDisplay.appendChild(domOperator)
})})

operationButton.addEventListener('click', function () {
    if (firstNumber && secondNumber) {
    const domResult = document.createElement('span')
    const operation = operate(firstNumber, operator, secondNumber);
    domResult.textContent = operation
    operationResult.appendChild(domResult);
    }
})


function add(a,b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(first, operator, second) {
    let result;
    switch (operator) {
        case '+':
           result =  add(first, second);
            break;
        case '-':
            result = subtract(first, second);
            break;
        case 'x':
            result = multiply(first, second);
            break;
        default:
            result = divide(first, second);
    }
    return result;
}

