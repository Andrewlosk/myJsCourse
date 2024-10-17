'use strict';

// BOM
//!  navigator - за допомогою нього ми можемо отримати інформацію про браузер і операційну систему


// console.log(navigator.userAgent);
// alert(location.href);


// if(confirm("перейти на сайт Wikipedia?")) {
//     location.href = "https://www.youtube.com/"
// }







//  DOM - навігація по документу


// const htmlElement = document.documentElement;
// const headElement = document.head;
// const bodyElement = document.body;


// console.log(htmlElement);
// console.log(headElement);
// console.log(bodyElement);





const item = document.querySelector('.item');


const parentElementNode = item.parentNode;
// elem.parentNode - вибере батька elem
console.log(parentElementNode);




// elem.childNodes - псевдомасив зберігає всі дочірні елементи, включаючи текстові.
const childElementNode = item.childNodes;
console.log(childElementNode);



// elem.children - псевдомасив зберігає тільки дочірні вузли-елементи, тобто відповідні тегам.

const childrenElem = parentElementNode.children;

console.log(childrenElem);





// elem.firstChild - вибере перший дочірній елемент всередині elem, включаючи текстові вузли.

// отримання першого дочірнього елементу

const container = document.querySelector('.container');
const firstChildElement = container.firstElementChild;

console.log(`first: ${firstChildElement}`);



// last element with text


const lastChild = container.lastChild;

console.log(`last: ${lastChild}`);


// отримання останього дочірнього елемента 

const lastElementChild = container.lastElementChild;



// отрманння попередьногго сусіда
const secondElement = firstChildElement.nextElementSibling;


// отримання наступоного сусіда

const thirdElement = secondElement.nextElementSibling;





// використання querySelector для вибору першого параграфу
const firstParagraph = document.querySelector('p');
console.log(`dirst ${firstParagraph}`);


const allParagraphs = document.querySelectorAll('p');

const secondParagrph = document.querySelector('.second');

console.log(secondParagrph);

