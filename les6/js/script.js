'use strict';

// const message = 'mango ' + 'is ' + 'happy';

// console.log(message);


// let result;
// result = 5 / `2`;
// console.log(result);



// const str = 'Усіпх - це не випадковість, а результат постійного старання';

// console.log(str.startsWith('Усі'));
// console.log(str.endsWith('ння'));


// const title = '          Welcome          ';
// console.log(title.trim());


// const title1 = 'Welcome';
// console.log(title1.padEnd(10, '!'));
// console.log(title1.padStart(17, '!'));





// // Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .charAt(), вивести перший символ вашого імені в консоль.

// const name = 'Andrii';
// console.log(name.charAt(0));




// const secName = 'andrii losk';
// console.log(secName.indexOf(' '));




// let  name = 'ANdrii';
// console.log(name.replace('A', '@'));





// const subTitle = 'JavaScript';
// console.log(subTitle.substring(0,4));




// const quest = prompt('kak zovyt', '');
// const apartment = prompt('hotel?', '');
// const numberRoom = +prompt('room?', '');
// const surname = prompt('surname?', '');

// const mess = alert(`Гість ${quest} ${surname} поселяється в ${apartment} номер ${numberRoom}`);

// console.log(mess);





// const message = prompt('fdkjh:', '');
// console.log(message.trim());




// let balance = 'Ваш баланс поповнено на 1';
// console.log(balance.padEnd(30, 0));






// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'розпродаж';


// const string1 = 'Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!';
// const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
// const string3 = 'Рекламна кампанія #jsIsAwesome';

// console.log(string1.includes(blacklistedWord1));
// console.log(string2.toLowerCase(), string2.includes(blacklistedWord2)); 
// // console.log(string2.includes(blacklistedWord2));
// console.log(string2.includes(blacklistedWord1 || blacklistedWord2));






const totlaMinutes = prompt('Введіть кількість хвилин', '');
const numberHours = totlaMinutes / 60;
const days = Math.floor(numberHours / 24);
const hours = Math.floor(numberHours % 24);

const minutes = totlaMinutes % 60;

const modMinutes = String(minutes).padStart(2, '0');
const modHours = String(hours).padStart(2, '0');

alert(`${days}days, ${modHours} hours, ${modMinutes}`)
console.log(`${days}days, ${modHours} hours, ${modMinutes}`);