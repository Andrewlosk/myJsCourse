// callback

const first = function(callback) {
    setTimeout(() => {
        console.log(1);
        callback();
    }, 500)
}

const second = () => {
    console.log(2);
}

first(second);



//? абстракція

for (let i = 0; i < 10; i++) {
    console.log(i);
}


const repeatLog = function(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}


repeatLog(10);



const printValue = function(value) {
    console.log(value);
}
const prettyPrint = function(value) {
    console.log('Pretty function: ', value);
}

const repeat = function(n, action) {
    for (let i = 0; i < n; i++){
        action(i);
    }
}

const labbles = [];

repeat(10, value => {
    labbles.push(`label ${value + 1}`);
})

console.log(labbles);

repeat(7, printValue);
repeat(2, prettyPrint);
















//? фільтрація масиву





const filter = function(array, test) {
    const filteredElements = [];
    for (let element of array) {
        const passed =  test(element);
        if(passed){
            filteredElements.push(element);
        }
    }
    return filteredElements;
}

const fruits = [
    { name: 'apples', price: 200, isFresh: true},
    { name: 'orange', price: 150, isFresh: false},
    { name: 'bananas', price: 100, isFresh: true}
]

const freshFruits = filter(fruits, fruit => fruit.isFresh);

console.log(freshFruits);

const fruitsPrice = filter(fruits, fruit => fruit.price >= 150)

console.log(fruitsPrice);











// ? стрілочна функціяяя 

const bar = function(name) {
    console.log(name);
}

const bar1 = (name) => console.log(name);
bar1('sss')



const bar2 = name => {
    console.log(name);
}

// ? стрілочні функції 

const obj = {
    name: 'john',
    sayName: function(){
        console.log(`my name is ${this.name}`);
    },

    sayNameArrow: () => {
        console.log(`my anme is ${this.name}`);
    }
}


obj.sayName();
obj.sayNameArrow();



const sum = function() {

    // create array from pseudoarray
    const arg = Array.from(arguments);
    console.log(arg);


    let total = 0;

    for (let i = 0; i < arguments.length; i ++) {
        total += arguments[i]
    }
    return total;
}

console.log(sum(1, 3, 4));



// ! arrow func не має доступу до обєкту arguments


const sumArrow = () => {
    let total = 0;
    for (let i = 0; i < arguments.length; i ++) {
        total += arguments[i]
    }
    return total;
}


console.log(sumArrow(1, 3, 4));



// 2

const sumArrow1 = (...args) => {
    console.log(args);
    let total = 0;
    for (let i = 0; i < args.length; i ++) {
        total += args[i]
    }
    return total;
}


console.log(sumArrow1(1, 3, 4));











//!!!!!!! Tassssskkkssssssss +++++++===========================================



const squareArray =  function (array) {
    const numSquare = [];
    for (let i = 0; i < array.length; i++) {
       numSquare.push(array[i] * array[i])
    }
    return numSquare;
}

console.log(squareArray([3, 2, 4, 3]));




// task ==



const myNewArrowFunction = (...args) => {
    console.log(args);
}



myNewArrowFunction(1, 2, 3);
myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");






// Напишіть функцію, яка повертає новий масив, в якому всі елементи масиву помножені на задане число, з використанням колбек-функції


const arr = [1, 2, 3, 4, 5];


function multiplyArray(arr, num, callback) {
    const arrayNew = [];
    for (let i = 0; i < arr.length; i++) {
        arrayNew.push(arr[i] * num)
    }
    callback(arrayNew)
}

const finish = function (res) {
    console.log(`масив помножений на щадане число ${res}`);
}
multiplyArray(arr, 3, finish);
