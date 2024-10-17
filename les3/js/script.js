'use strict'

const x = 5;
const y = 10;
const z = 5;
// console.log('x > y', x > y);
// console.log('x < y', x < y);
// console.log('x >= y', x >= y);
// console.log('x <= y', x <= y);
// console.log('x == y', x == y);
// console.log('x === z', x === z);
// console.log('x === "5":', x === '5');
// console.log('x == "5":', x == '5');
// console.log('x !== z', x !== z);
// console.log('x !="5"', x != '5');

console.log(8 % x);


let num = '524';
console.log(typeof num);
num = Number(num);
console.log(typeof num);
console.log(num);






let elementWidth = '50px';

elementWidth = Number.parseInt(elementWidth)


console.log(typeof elementWidth);
console.log(elementWidth);








let elementHeight = '200.48490384804480z4809zxc';

elementHeight = Number.parseFloat(elementHeight);
console.log(elementHeight);








const validNumber = Number('51');
console.log(Number.isNaN(validNumber));


const invalidString = Number('fcdsfsd');
console.log(Number.isNaN(invalidString));


console.log((0.1 * 10 + 0.2 *10) / 10);




// MAth.floor(num) - повертає ннайбільше ціле число. фбо дорівнює вказаному

console.log(Math.floor(1.7));


//Math.ceil(num) -повертає найменьше число

console.log(Math.ceil(1.2));


// Math.round(num) - округляє до ближчого цілого числа
console.log(Math.round(1.5));

//Math.max(num1, num2, ....) - повертає найбліьше занчиення числа з набору

console.log(Math.max(20, 23, 100, 4, 13));

//Math.min(num1, num2, ....) - повертає найменьше занчиення числа з набору

console.log(Math.min(20, 23, 100, 4, 13));

// Math.pow(num, expondet) - зведення в ступінь

console.log(Math.pow(1000,30));

// Math.random() - рандом число від 0 до 1

console.log(Math.random());

console.log(((Math.random() * (10 - 1) + 1)).toFixed());


let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;



