'use strict';

//перебір обєкта

//? цикл for in

// for (let key in object) {

// }


const user = {
    name: 'john',
    age: 30,
    isAdmin: true
}


for (let key in user) {
    console.log(key); //name age isAdmin

    console.log(user[key]); //john 30 true
}



//?корисні методи обєкта


//* Object.keys(obj) - повертає масив ключів обєкта



const hotel = {
    name: 'hotel bobika',
    stars: 5,
    capacity: 100


}


const keys = Object.keys(hotel);
console.log(keys);


for (let key of keys) {
    console.log(hotel[key]);
    console.log(key);

}


//* Object.values(obj) - повертає масив значень обєкт

const values = Object.values(hotel);
console.log(values);



//*  Object.entries - повертає масив де кожен масив буде містити апру ключ значення

const entries = Object.entries(hotel)

console.log(entries);



for (let entry of entries) {
    const key = entry[0]
    const value =  entry[1]

    console.log(`key ${key}: ${value}`);
}



// Припустимо перед нами стоїть завдання порахувати загальну кількість продуктів в об'єкті формату ім'я-продукту: кількість. Тоді підійде метод Object.values () для того щоб отримати масив всіх значень і потім зручно їх скласти.


const foods = {
    apples: 6,
    pears: 4,
    oranges: 9,
    cherry: 10,
    bread: 11
}

const foodsValue = Object.values(foods)

console.log(foodsValue);

let count = 0;
for (let i = 0; i < foodsValue.length; i++) {
    count += foodsValue[i]
}

console.log(count);








//? оператор spread - дозволяє розгортати елементи масиву або властивосі обєкту

//? розпилення аргументів

const temperaturesCity = {
    Lviv: 14,
    Kyiv: 20,
    London: 12,
    Oslo: 10
} 


const valuesTemperaturesCity = Object.values(temperaturesCity);

console.log(valuesTemperaturesCity);

const min = Math.min(...valuesTemperaturesCity)

console.log(min);








//? розпилення масивів - дозволяє розгортати елементи одного масиву в інший



const houses = ['Arryn', 'Frey', 'Stark', 'Lannister'];

const copyOfHouses = [...houses];

console.log(houses);
console.log(copyOfHouses);

// console.log(houses === copyOfHouses);



const completeHouses = [...houses, 'Tagatyen']

console.log(completeHouses);








//розпилення обєктів

const a = {x: 1, y: 2};
const b = {x: 0, z: 3};


const c = Object.assign({}, a, b)

console.log(c);


const u = {...a, ...b}


// те ж саме тільки через spread

const d = {x:5, j: 4, ...a, z: 40, ...b}

console.log(d);

//! створюємо химеру


const lion = {hasTail: true, legs: 4};
const eagle = {canFly: true};

const chimera = {...lion, ...eagle}

console.log(chimera);









// присвоєння за посиланням і за значенням

let num = 5;

let numValue = num;

num = 10

console.log(num, numValue);



const arrayType = ['mango'];
const arrayName = arrayType;

console.log(arrayType, arrayName);

arrayType.push('orange')

console.log(arrayType, arrayName);


arrayName.push('apples');
console.log(arrayType, arrayName);




// practice


// Дано масив об’єктів
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//   ];

// Написати функція яка буде отримувати масив та ім’я друга якого потрібно знайти 

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// Написати функцію яка буде повертати масив всіх імен друзів
// console.log(getAllNames(friends));

// Написати функцію яка буде повертати масив імен друзів які онлайн
// console.log(getOnlineFriends(friends));

// Написати функцію яка буде повертати масив імен друзів які офлайн
// console.log(getOfflineFriends(friends));





const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
];


//task 1

// const findFriendByName = function (array, name) {
//     for (let i = 0; i < array.length; i++){
//         if (array[i].name === name){
//             return name
//         }
//     } return 'не знайдено'


// };


// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));



//task 2


// const getAllNames = function (array) {
//     const allFriends = [];
//     for (let i = 0; i < array.length; i++){
//         allFriends.push(array[i].name)
//     }
//     return allFriends

// }


// console.log(getAllNames(friends));



//task 3

// const getOnlineFriends = function (array) {
//     const onlineFriends = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].online) {
//             onlineFriends.push(array[i].name)
//         }
        
//     };
//     return onlineFriends

// };


// console.log(getOnlineFriends(friends));



//task 4


// const getOfflineFriends = function (array) {
//     const offlineFriends = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].online === false) {
//             offlineFriends.push(array[i].name)
//         }
        
//     };
//     return offlineFriends

// };

// console.log(getOfflineFriends(friends));



//task 5



// Написати функцію яка буде повертати об’єкт масивів  імен друзів які офлайн та онлайн. Створити 2 масива онлайн і офлайн,  якщо тру - в перший, якщо ні - в другий

const getFriendsStatus = (array) => {
    const friendsByStatus = {
        online: [],
        offline: []
    }
    for (let i = 0; i < array.length; i++) {
        // if (array[i].online === false) {
        //     friendsByStatus.offline.push(array[i].name)
        // }else {
        //     friendsByStatus.online.push(array[i].name)
        // } 

        array[i].online ? friendsByStatus.online.push(array[i].name) : friendsByStatus.offline.push(array[i].name)
            
    }
    return friendsByStatus
}



console.log(getFriendsStatus(friends));