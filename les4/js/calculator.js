'use strict'

function sum(a,b) {
    return a + b;
}

function substract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}
function divison(a,b) {
    return a / b;
}

const OPERATION = {
    sum: '+',
    substract: '-',
    multiply: '*',
    divison: '/',
};

function calculate({a, b, operation}) {

    let result = null;


    switch (operation) {
        case OPERATION.sum:
            result = sum(a, b);
            break;

        case OPERATION.substract:
            result = sum(a, b);
            break; 
        case OPERATION.multiply:
            result = multiply(a, b);
            break; 
            
        case OPERATION.divison:
            result = divison(a, b);
            break;
            default:
            break;    
    }
    return result;
}

const inputANUm = document.querySelector('.js-input-a');
const inputBNUm = document.querySelector('.js-input-b');
const selectOption = document.querySelector('.js-select-operation');
const btnResult = document.querySelector('.js-btn-resault');
const outputResult = document.querySelector('.js-output');


btnResult.addEventListener('click', () => {
    const a = +inputANUm.value;
    const b = +inputBNUm.value;

    const operation = selectOption.value;

    const result = calculate({
        a,
        b,
        operation,
    });
    console.log(result);
    outputResult.innerHTML = result;

});