'use strict';

// const btnInput = document.querySelector('.btn');


// btnInput.onClick = function() {
//     alert('click')
// };


// sintacsis

// element.addEventListener(event, handler, [optional]);
// element.removeEventListener(event, handler, [optional]); - for remove event listener



const singleBtn = document.querySelector('.single');
const multiBtn = document.querySelector('.multiple');


const handleClick = () => {
    alert("click");
};
singleBtn.addEventListener('click', handleClick);



// singleBtn.addEventListener('click', () => {
//     alert("click");
// })


// ============================================================================================================

const firstCallback = () => alert("first Callback");
const secondCallback = () => alert("second Callback");
const thirdCallback = () => alert("third Callback");




multiBtn.addEventListener('click', firstCallback);
multiBtn.addEventListener('click', secondCallback);
multiBtn.addEventListener('click', thirdCallback);




// =================================================================================================

const addBtn = document.querySelector('[data-action="add"]');
const removeBtn = document.querySelector('[data-action="remove"]');
const btn = document.querySelector('.btn-click');

const handleClickAlert = () => alert('click events alert');


addBtn.addEventListener('click', () => {
    btn.addEventListener('click', handleClickAlert)
})

removeBtn.addEventListener('click', () => {
    btn.removeEventListener('click', handleClickAlert)
})

// Напишіть скрипт зміни кольору кнопки при натискані на неї.


const colorBtn = document.querySelector('.colorBtn');

colorBtn.addEventListener('click', () => {
    colorBtn.style.background = 'green';
})


// Напиши скрипт реалізації додавання класу до заголовка при кліку на кнопку ‘Додати стилі’.

const title = document.querySelector('.title');
const btnClick = document.querySelector('.btnClick');

btnClick.addEventListener('click', () => {
    title.classList.add('bobik');
})










const handleClickEvent = (event) => {
    console.log("event", event);
    console.log('event type', event.type);
    console.log('this', event.this);
    console.log("target", event.target);

}


btn.addEventListener('click', handleClickEvent)




