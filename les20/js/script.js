// Створити масив із п'яти чисел. Використовуючи метод push(), додати до масиву ще один елемент.


const num = [5,7,8,9,0];
num.push(2);
console.log(num);



// Створити масив із трьох стрічок. Використовуючи метод pop(), видалити з масиву останній елемент.

const arr = ['ssss', 'dddd', 'aaaa'];

arr.pop();

console.log(arr);



// Створити масив із десяти чисел. Використовуючи метод slice(), створити новий масив, який буде містити перші п'ять елементів.


const arr2 = [2, 4, 5, 6, 1, 3, 5, 6, 43, 1];


const arrNew = arr2.slice(0, 5)

console.log(arrNew);



// Створити масив із п'яти чисел. Використовуючи метод indexOf(), знайти індекс елемента зі значенням 3.


const arrNumbers = [3, 5, 6, 7, 5];
console.log(arrNumbers.indexOf(3));

//Створити масив із п'яти стрічок. Використовуючи метод join(), створити одну стрічку, яка буде містити всі елементи масиву, розділені комою.


const arrStr = ['e3ds', 'Andrii Krasava', 'dsd', 'Nazar Progulchik', 'rererer'];
let str = arrStr.join(', ')
console.log(str);




// Робимо slug в URL з назви стратті. Заголовок статті складається тільки з букв та пропусків
// - Нормалізуємо рядок
// - Разбиваємо по словах
// - Зшиваємо в рядок з розділителями
// - Ченінг
// Повинно вийти top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework';

const result = title.trim().toLowerCase().split(' ')

const slug = result.join('-')
console.log(slug);


// Напиши скрипт який рахує суму елементів двух масивів

const num1 = [4, 5, 67, 8, 6, 1];
const num2 = [2, 4, 6, 1, 1, 55];

const arrAll = num1.concat(num2);

let sum = 0;

for (let i = 0; i < arrAll.length; i++) {
    sum += arrAll[i]
}

console.log(sum);



// ========================


const message = "Welcome to Ukraine!";

const letters = message.split('')
console.log(letters);

console.log(letters.indexOf('l'));

const fullStr = letters.join("")
console.log(fullStr);




// ================================
// Створити масив гравців. додати до кожного гравця -N, де n - це порядковий номер.

const team = ['andrii', 'andrysha', 'nazarchik', 'nazar', 'Yulia'];

for (let i = 0; i < team.length; i++) {
    team[i] = team[i] + '-' + (i + 1);
}
console.log(team);