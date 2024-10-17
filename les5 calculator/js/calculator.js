'use strict'

const res = document.getElementById('result');
const calculatorClearBtn = document.getElementById('clear-button');
const calculatorBtns = document.querySelectorAll('.calculator-button');
const resultButton = document.querySelector('.calculator-result');


function calculate(value) {
    const calculateValue = eval(value || null);

    if(isNaN(calculateValue)) {
        res.value = 'не можливо поділити нуль на нуль'
        setTimeout(() => {
            res.value = '';
        },1000);
    }else{
        res.value = calculateValue;
    }
}

function liveScreen(enteredValue) {
    if(!res.value) {
        res.value = "";
    }

    res.value += enteredValue;
}

calculatorBtns.forEach((button) => {
    button.addEventListener('click', () => {
        liveScreen(button.value);
    });
});

resultButton.addEventListener('click', () => {
    calculate(res.value);
})

calculatorClearBtn.addEventListener('click', () => {
    res.value = "";
});





