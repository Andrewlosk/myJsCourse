'use strict';

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// console.log(matrix[0][1]); //2
// console.log(matrix[2][2]); //9
// console.log(matrix[1][1]); //5

let total = 0;
for (let i = 0; i < matrix.length; i++) {
    console.log('pidmasiv marichi matrix[i]', matrix[i]);

    for (let j = 0; j < matrix[i].length; j++) {
        console.log('element pidmasivy marichi matrix[i][j]', matrix[i][j]);
        total += matrix[i][j]
    }

}

console.log(total);


// const data = [
//     ['title', 'text', 3],
//     ['Yulia', 'about Y', 34],
//     ['Kate', 'about K', 24],
//     ['Andrii', 'about A', 15]
// ];


// Через індекс елемента додати в кінець масиву Arr1 новий елемент зі значенням: 22. Вивести значення кожного елемента масиву Arr1 в консоль.



let arr = [1, 5, "4", "hello"];
arr[4] = 22;


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}




const arr2 = [1, 5, "4", "hello"];


for (let type of arr2) {
    console.log(typeof type);
}
// ====================


const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total2 = 0;


for (let i = 0; i < numbers.length; i++) {
    let dif = numbers[i] % 2

    if (dif === 0) {
        total2 += numbers[i]
    }else {
        continue;
    }
}
console.log(total2);



// ==========================
// Напиши скрипт пошуку логіна. Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.' Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
// - Спочатку через for
// - Потім через for...of
// - Логіка break
// - Метод includes() с тернарним оператором


// const users = ['bobik', 'baran', 'nazar', 'ivan'];


const logins = ['user1', 'user2', 'user3', 'user4'];
const loginToFind = 'user3';
let message = '';
message = logins.includes(loginToFind) ? `Користувач ${loginToFind} знайдено ` : `Користувач ${loginToFind} не знайдено.` ;

console.log(message);

// for (let i = 0; i < logins.length; i ++) {
//     if (loginToFind == logins[i]) {
//         message = "znaideno";
//     }else {
//         message = 'Користувач [логін] ne знайдено'
//     }
//     console.log(message);
// }





// for (let new2 of logins) {
//     if (loginToFind == new2) {
//         message = "znaideno";
//         console.log(message);
//     }else {
//         message = 'Користувач [логін] ne знайдено'
//     }
//     console.log(message);
// }



// for (let i = 0; i < logins.length; i ++) {
//     if (loginToFind == logins[i]) {
//         message = "znaideno";
//         break;
//     }else {
//         message = 'Користувач [логін] ne знайдено'
//     }
//     console.log(message);
// }







// Напиши скрипт пошуку самого маленького числа в масиві, при умові, що числа унікальні (не повторюються).



const numbers1 = [51, 18, 13, 24, 7, 85, 19];
let low = numbers1[0]

for (let i = 0; i < numbers1.length; i++){
    if (numbers1[i] < low) {
        low = numbers1[i]
        
    }
}

console.log(low);




// Напиши скрипт який рахує суму елементів двух масивів. Без методу concat()
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];



let sum = 0;

for (let i = 0; i < array1.length; i++) {
    sum = array1[i] + array2[i] + sum 
}
console.log(sum);