'use strict';


const inputElement = document.querySelector('.my-input');
const focusBtn = document.querySelector('.focus');
const blurBtn = document.querySelector('.blur');



focusBtn.addEventListener('click', () =>{
    inputElement.focus();

    console.log('input Focus');
})
blurBtn.addEventListener('click', () =>{
    inputElement.blur();

    console.log('input Blur');
})


inputElement.addEventListener('change', (event) => {
    const newValue = event.target.value;
    console.log('event change :', newValue);
})


inputElement.addEventListener('input', (event) => {
    const newValue = event.target.value;
    console.log('event change :', newValue);
})



const box = document.querySelector('.box');

let leftPosition = box.offsetLeft;
let topPosition = box.offsetTop;


function translatePosition(event) {
    if(event.key === 'ArrowRight') {

        leftPosition += 10;
        box.style.left = leftPosition + 'px';

    } else if (event.key === 'ArrowLeft') {
        leftPosition -= 10;
        box.style.left = leftPosition + 'px';
    }
}

document.addEventListener('keydown', translatePosition)