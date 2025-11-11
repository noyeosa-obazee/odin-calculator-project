const operationDisplay = document.querySelector('#display');
const operationResult = document.querySelector('#result');

const numberButton = [...document.querySelectorAll('.number-btn')];
const operatorButton = [...document.querySelectorAll('.operator-btn')];
const operationButton = document.querySelector('#perform-operation-btn');

let expression = '';

function operate(expr) {
    const cleanExpr = expr.replace(/\s+/g, '');
    let result = handleMultiplicationDivision(cleanExpr);
    result = handleAdditionSubtraction(result);
    return result

}

function handleMultiplicationDivision(exp) {
    const parts  = exp.split(/([+\-])/);
    const processedParts = parts.map(part => {
        if (part === '+' || part === '-') return part;
        const subParts = part.split(/([*/])/);
        let subResult = parseFloat(subParts[0]);
        for(let i = 0; i < subParts.length; i+=2) {
            const operator = subParts[i];
            const nextNum = parseFloat(subParts[i + 1]);

            if (operator === '*') {
                subResult *= nextNum;
            } 
            else if (operator === '/') {
                if (nextNum === 0) throw new Error('Division by zero');
                subResult /= nextNum;

            }
        }
        return subResult.toString();
    });

    return processedParts.join('');
}

function handleAdditionSubtraction(exp) {
    const parts = exp.split(/([+\-])/);
    let result = parseFloat(parts[0]);

    for (let i = 1; i < parts.length; i+=2) {
        const operator = parts[i];
        const nextNum = parseFloat(parts[i + 1]);

        if (operator === '+') {
            result += nextNum;
        }
        else if (operator === '-') {
            result += nextNum;
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
expression +=e.target.textContent
operationDisplay.textContent = expression
})})


operationButton.addEventListener('click', function () {
  const result = operate(expression);
  operationResult.textContent = result;
})


