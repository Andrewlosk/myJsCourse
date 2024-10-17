"use strict";

// ========================
let i = 0;

while (i < 3) {
  console.log(i);
  i++;
}

// =============
let age = 0;

while (age <= 18) {
  console.log(age);
  age += 1;
}

// ============
let counter = 0;

while (counter <= 10) {
  console.log("counter:", counter);
  counter += 1;
}

// =========
let clientCounter = 18;
const maxClients = 25;

while (clientCounter <= maxClients) {
  clientCounter++;
  console.log(clientCounter);
}

// do... while

// do{
//     // body
// } while(umova)

let x = 0;
do {
  console.log(x);
} while (false);

// Цю форму синтаксису слід використовувати лише тоді, коли ви хочете, щоб тіло циклу виконалось хоча б один раз, незалежно від умови. Зазвичай, інша форма є більш бажаною while(…) {…}

let pass = '';
do {
    pass = prompt('type pass longer 4-th symb', '');
}while(pass.length < 5)

console.log('velli password');




// for


// for(let i; ymova; i++) {
//     // body 
//     // console.log(i);  
// }


let k = 0;

for(k; k < 5; k++) {
    console.log(k);
}



for(let t; t < 5; t++) {
    console.log(k);
}


let y = 0;

for(; y < 3; y++) {
    console.log(y);
}

for(; y < 3;) {
    console.log( y++);
}

// for(;;){
//     // 
// }


const max = 10;

for(let i = 0; i <= max; i++) {
    console.log(i);
}


// порахуємо суму

const target = 12;
let sum = 0;

for(let i = 0; i < target; i += 2){
    sum++
    console.log(sum);

}
console.log(sum);


const maxNum = 10;

for(let i = 0; i < 10; i++) {
    console.log(`${maxNum} % ${i} = `, maxNum % i);
}