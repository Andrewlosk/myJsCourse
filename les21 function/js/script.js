'use strict';


// function expression
const add = function (a, b, c) {
    return a + b + c;
}


console.log(add(1, 2, 3));

const result = add(1,2,3);

console.log(result);


// порядок виконання коду

const fnA = function () {
    console.log('почала виконуватись [A]');
    fnB();
    console.log('continue');
}

const fnB = function () {
    console.log('start B');

}

console.log('main');
fnA();
console.log('main');



// параметри за замовчуванням

const count= function(a = 0, b = 10, step = 1) {
    console.log(`a: ${a}, b: ${b}, step: ${step}`);

    for (let i = a; i <= b; i+=step) {
        console.log(i);
    }
}

// count(1,5)

// count(2)
// count()

count(undefined, 4, 1)
count(1, undefined, 1) // з undefined за замовчуванням ставиться значення


// патерн ' Guard Clause'

// amount - сума для зняття коштів 
// balance - загальний баланс



// !звичайний спопіб
const withdraw = function(amount, balance) {
    if(amount === 0) {
        console.log("для продовжяення операції потрібно ввести суму більше нуля");

    } else if(amount > balance) {
        console.log('недостятньо коштів');
    } else {
        console.log('операція проведена');
    }
}

withdraw(0, 300)
withdraw(3323, 222)
withdraw(32, 22222)



// correct
const withdraw1 = function(amount, balance) {

    if(amount === 0) {
        console.log("для продовжяення операції потрібно ввести суму більше нуля");
        return;
    }

    if(amount > balance) {
        console.log('недостятньо коштів');
        return;
    }
    console.log('операція проведена');
}

withdraw1(0, 300)
withdraw1(3323, 222)
withdraw1(32, 22222)

// Function decloration
console.log(add(1,4,5));

function add(a, b, c) {
    return a + b + c
}

//? псевдомасив argumets 

const sum = function() {
    let total = 0;

    for (const argumet of arguments) {
        total += argumet
    }
    return total;
}

console.log(sum(1,2,4,5));



const fn = function(...args) {
    // const args = Array.from(arguments)
    return args
}

console.log(fn(3,2,4,2));


const a = 10;
// global область видимості

const foo = function() {
    // фунціональна область видимості
    if(true) {
        // локальна область видимості
    }

    const validateInput = function() {
        // фунціональна область видимості validateInput
    }
    // фунціональна область видимості
}

// глабальна область видимості