//! синхронний код

//? Синхронний код виконується по порядку, тобто одна операція за іншою. Наступна операція починається тільки після того, як завершилася попередня.



console.log('first message');
console.log('second message');
console.log('third message');


//! асинхронний код

//? Асинхронний код дозволяє виконувати операції незалежно від основного потоку коду. Наприклад, ми можемо завантажити дані з сервера і продовжити виконання інших операцій, не чекаючи завершення завантаження.

console.log('first message');

setTimeout(() => {
    console.log('second message');
}, 2000)

console.log('third message');




//! таймери

//? setTimeout() - дозволяє нам запускати функцію один раз через певний інтервал часу


// setTimeout(() => {
//     alert('Hello everybobik')
// }, 5000)


const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    setTimeout(() => {
        alert('Hello everybobik')
    }, 5000)
})

//?setInterval() - дозволяє нам запускати функцію багаторазово, починаючи через певний інтервал часу, а потім постійно повторюючи у цьому інтервалі.



const start = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');
let timerId = null

start.addEventListener('click', () => {
    timerId = setInterval(() => {
        // alert('Hello everybobik')
        console.log('top');
        
    }, 2000)
    // console.log(timerId);
    
})


stopBtn.addEventListener('click', () => {
    clearInterval(timerId)
})