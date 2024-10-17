'use strict';


// методи join() and split()

// split(s) — дозволяє перетворити рядок в масив, розбивши її по розподілу s. Це не метод масиву, але розглядаємо ми його зараз так, як раніше про масиви не знали.
// join(s) — робить в точності протилежне split. Він бере масив і склеює його в рядок, використовуючи s як роздільник.





const message = 'Welcome to Ukraine';

console.log(message.split(' '));
// [ 'Welcome', 'to', 'Ukraine' ]
console.log(message.split(''));
// [
//     'W', 'e', 'l', 'c', 'o',
//     'm', 'e', ' ', 't', 'o',
//     ' ', 'U', 'k', 'r', 'a',
//     'i', 'n', 'e'
//   ]



const fruits = ['apple', 'banana', 'orange', 'pear']

console.log(fruits.join(" "));

console.log(fruits.join(", "));

console.log(fruits.join("-"));


// ! metods includes() an indexOf()

// array.includes(x) — визначає, чи містить масив деякий елемент x, повертаючи true або false відповідно. Використовуйте includes тоді, коли необхідно перевірити, чи є елемент в масиві і не важливий його порядковий номер.


const typeData = ['mango', 'Ajax',  'Poly'];

console.log(typeData.includes('Poly'));

console.log(typeData.indexOf('Poly'));
console.log(typeData.indexOf('ifff'));


//! перевірка множин includes()

const fruit = 'apple';

const answer = prompt('write name of ur favorite fruit:', '');

fruit.toUpperCase()
answer.toUpperCase()
if(answer.includes(fruit) && answer !== null) {
    alert('True');
}else {
    alert('false')
}


//! push()


const stack = [];



// stack[1] = 'app';

// stack[stack.length - 1] = 'red'

stack.push(1);
stack.push('two');
stack.push('three');

console.log(stack);


// pop() del last elem

const array = ['res', 3, true];


console.log(array.pop());
console.log(array.pop());

console.log(array);




// методи shift() and unshift()

// shift() — видаляє елемент з початку масиву і повертає його (елемента) значення.
// unshift() — додає елемент в початок масиву.


const user = ['Andriy', 'sasha', 'Gosha', 'Katya', 'Sonya', 'Yulia'];

console.log(user.shift());
console.log(user);

console.log(user.unshift('gorih'));
console.log(user);


const team = ['Andriy', 'sasha', 'Gosha', 'Katya', 'Sonya', 'Yulia'];

console.log(team.unshift('gorih'));
console.log(team);




// Slice() дозволяє отримувати елементи підмножини масиву і додавати їх в новий масив. У більшості випадків використовується для створення копії частини або цілого вихідного масиву.

const users = ['john', 'Alice', 'Bob', 'Nika'];

console.log(users.slice(1)); //[ 'Alice', 'Bob', 'Nika' ]
console.log(users.slice(1, 3)); // [ 'Alice', 'Bob' ]

console.log(users.slice()); //copy array


//const newArr = users.slice()
console.log(users.slice(-2)); //cut from end



//! Метод splice() - швейцарський ніж для роботи з масивами, в тому випадку, якщо вихідний масив необхідно змінити. Дозволяє видаляти, додавати і замінювати елементи в довільному місці масиву.

// щоб видалити елементи
// splice(position, num)

// position - іказувати позицію (індекс ) першого елемента для видалення
// num - кількість видаляючихся елементів


const scores = [1, 2, 3, 4, 5];

const deleteScores = scores.splice(0, 3)

console.log(scores); //[ 4, 5 ] масив коли ми видалили перші три елементи масиву

console.log(deleteScores); //[ 1, 2, 3 ] -  видалені елементи


const scores2 = [1, 2, 3, 4, 5];
const deleteScores2 = scores2 .splice(1, 3)
console.log(scores2);
console.log(deleteScores2);

// додавання елементів в масив

const colors = ['red', 'green', 'yellow', 'blue'];
console.log(colors.splice(2, 0, 'purple'));
console.log(colors.splice(2, 0, 11));
console.log(colors);


// заміна елементів масиву

const lang = ['c#', 'C++', 'java', 'js'];
console.log(lang.splice(1, 1, 'Python')); //[ 'C++' ]
console.log(lang); //[ 'c#', 'Python', 'java', 'js' ]

//метод concat()


const oldClients = ['john', 'Alice', 'Bob', 'Nika'];
const newClients = ['Andriy', 'sasha', 'Gosha', 'Katya', 'Sonya', 'Yulia'];


const allClients = oldClients.concat(newClients)
console.log(oldClients); //[ 'john', 'Alice', 'Bob', 'Nika' ]
console.log(newClients); //[ 'Andriy', 'sasha', 'Gosha', 'Katya', 'Sonya', 'Yulia' ]



console.log(allClients); 
// [
//   'john',   'Alice',
//   'Bob',    'Nika',
//   'Andriy', 'sasha',
//   'Gosha',  'Katya',
//   'Sonya',  'Yulia'
// ]


































































































