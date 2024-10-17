let counter = 0;

const counterHtml = document.querySelector(".counter");

setInterval(() => {
  counter += 1;
  counterHtml.textContent = counter;
}, 1000);

// 2

// Завдання "Зміна кольору": Створіть блок, який змінює свій фоновий колір кожні 3 секунди. Використовуйте setInterval для зміни кольору.

const box = document.querySelector(".box");

const colorArr = [
  "#fcba03",
  "#1e8fc7",
  "#1e2cc7",
  "#c71ea2",
  "#c71e2f",
  "#000000",
];
let index = 0;

setInterval(() => {
  let randNum = colorArr[Math.floor(Math.random() * colorArr.length)];
  console.log(randNum);

  box.style.backgroundColor = randNum;
}, 3000);

// У наведеному нижче коді заплановано виклик setTimeout, потім виконується важкий розрахунок, на виконання якого потрібно більше 100 мс.
// Коли запуститься запланована функція?
// Після циклу.
// До циклу.
// На початку циклу.
// Що буде показувати alert?
// let num = 0;
// setTimeout(() => alert(num), 100); // ?
// // припустимо, що час виконання цієї функції > 100 мс
// for(let i = 0; i < 100000000; i += 1) {
//   num+=1;
// }

// Завдання "Зміна тексту": Створіть текст, який циклічно змінюється між кількома заданими значеннями. Використовуйте setInterval для зміни тексту кожні 2 секунди.

const p = document.querySelector("#text");
const textArr = [
  "baranchik",
  "rozhepa",
  "bobik",
  "#c71ea2",
  "#c71e2f",
  "#000000",
];
let index1 = 0;

setInterval(() => {
  let randText = textArr[Math.floor(Math.random() * textArr.length)];
  // console.log(randNum);

  p.textContent = randText;
}, 3000);

// Завдання "Затримка повідомлення": Створіть функцію, яка приймає текстове повідомлення та затримує його виведення на сторінку на певний час, використовуючи setTimeout.

// const dalayMessage = (message) => {
//     setTimeout(() => {
//         alert(message)
//     }, 2000)
// }

// dalayMessage('bobik')

// ! task

// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду, починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
// Використовуючи setInterval.
// Використовуючи вкладений setTimeout.

const printNumbers = (from, to) => {
    let current = from 
    let timer = setInterval(() => {
        console.log(current);
        if (current === to) {
            clearInterval(timer);
        }else{
            current+=1
        }

    }, 1000)

};

printNumbers(1, 10);

// ||

const printNumbers2 = (from, to) => {
    const print = (num) => {
        console.log(num);
    


        if (num < to) {
          setTimeout(() => {
            print(num + 1);

          }, 1000);

        }
      }
    
      print(from);

};

printNumbers2(1, 10);









// Завдання "Зміна стилів": Створіть блок, який змінює свої стилі (наприклад, фоновий колір, розмір шрифту) через певний час. Використовуйте setTimeout для зміни стилів блоку.



const block = document.getElementById('block');

setTimeout(() => {
    block.style.backgroundColor = '#c71ea2'
    // block.style.width = '200px'
    // block.style.height = '200px'
}, 1000)

// Завдання "Зміна розміру": Створіть блок, який змінює свій розмір кожні 4 секунди. Використовуйте setInterval для зміни ширини та висоти блоку.
let width = 200
let height = 200

setInterval(() => {
    height+=50
    width+=50
    block.style.width = width + 'px'
    block.style.height = height + 'px'

    
}, 4000)