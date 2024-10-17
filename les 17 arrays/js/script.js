'use strict';

// ! masivvv

const data = ['text', 2, undefined, null, {name: ['john', 'asssasa']}, 'last elem'];


// getting elem from array
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);
console.log(data[3]);




// загальна кількіть елементів в масиві

console.log(data.length);

console.log(data[4].name[1]);

console.log(data[data.length-1]); //last element
console.log(data.at(-1)); //last elem new variation







//! ітерація по масиву
const clients = ['Nazar', 'Sasha', 'Sonia', 'Andrii', 'Yulia', 'Katya', 'Vlad', 'Gosha'];

for(let i = 0; i < clients.length; i++) {
    console.log('member:', clients[i]);
}


// заповнювати значеннями масив

const numbers = [];

for (let i = 1; i <= 3; i++) {
    numbers.push(`id-${i}`)
}
console.log(numbers);



// for ... of
const item = document.querySelector('.item')

const team = ['Sonia', 'Andrii', 'Yulia', 'Katya'];

for(const client of team) {
    console.log(client);
}


const str = 'javaScript';

for(let letter of str) {
    console.log(letter);
}