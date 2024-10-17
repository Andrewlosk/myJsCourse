// // події клавіатури

// document.addEventListener('keydown', e => {
//     console.log('keydown', e); //обєкт події
//     console.log('key', e.key);
//     console.log('code', e.code);
// })
// document.addEventListener('keyup', e => {
//     console.log('keyup', e);
// })



// //? клавіші модифікатори

// document.addEventListener('keydown', e => {
//     e.preventDefault()
//     if ((e.ctrlKey || e.metaKey) && e.code === 'KeyS') {
//         console.log('ctrl + s or command + s');
//     }
// })




// //? події миші



// // mousedown: Коли натискаєш кнопку миші на квадратику, він стає синім.
// // mouseup: Коли відпускаєш кнопку миші, квадратик повертається до жовтого кольору.

// const square = document.querySelector('.square');

// square.addEventListener('mousedown', () => {
//     square.style.backgroundColor = 'blue'
// })

// square.addEventListener('mouseup', () => {
//     square.style.backgroundColor = 'yellow'
// })



// // 



// // mouseover: Коли курсор миші заходить на квадратик, він стає зеленим.
// // mouseout: Коли курсор миші виходить з квадратика, він повертається до фіолетового кольору.


// square.addEventListener('mouseover', () => {
//     square.style.backgroundColor = 'green'
// })


// square.addEventListener('mouseout', () => {
//     square.style.backgroundColor = 'purple'
// })









// // Коли курсор миші рухається над квадратиком, він стає червоним.


// square.addEventListener('mousemove', () => {
//     square.style.backgroundColor = 'red'
// })

// // click - спрацьовує після mousedown, а потім mouseup над тим же елементом, якщо була використана ліва кнопка миші.

// // square.addEventListener('click', () => {
// //     alert('квадрат було натиснуто')
// // })


// // dblclick - спрацьовує після двох кліків на одному елементі за короткий проміжок часу. На сьогоднішній день рідко використовується.

// square.addEventListener('dblclick', () => {
//     alert('квадрат було натиснуто 2 times')
// })

// // contextmenu - спрацьовує при натисканні правої кнопки миші. Є й інші способи відкрити контекстне меню, напр. за допомогою спеціальної клавіші на клавіатурі, але це вже не зовсім подія миші.
// square.addEventListener('contextmenu', (e) => {
//     e.preventDefault()
//     square.style.backgroundColor = 'black'
//     alert('відкрите контексте меню ')
// })





// //? Координати: clientX/Y, pageX/Y

// //відносно вікна clientX/Y
// // відносно document pageX/Y

// const rectangle = document.querySelector('.rectangle');
// const info = document.querySelector('.info')

// rectangle.addEventListener('mousemove', (e) => {
//     const clientX = e.clientX;

//     const clientY = e.clientY;

//     const pageX = e.pageX;

//     const pageY = e.pageY;

//     info.textContent = `clientX: ${clientX}, clientY: ${clientY}, pageX: ${pageX}, pageY: ${pageY}`
//     rectangle.style.backgroundColor = 'yellow'

// })




// rectangle.addEventListener('mouseout', () => {
//     info.textContent = ""
//     rectangle.style.backgroundColor = 'aquamarine'
// })






// const body = document.body


// body.addEventListener('mousemove', (e) => {
//     const clientX = e.clientX;

//     const clientY = e.clientY;

//     const pageX = e.pageX;

//     const pageY = e.pageY;

//     info.textContent = `clientX: ${clientX}, clientY: ${clientY}, pageX: ${pageX}, pageY: ${pageY}`
//     body.style.backgroundColor = 'lightblue'

// })

// body.addEventListener('mouseout', () => {
//     info.textContent = ""
//     body.style.backgroundColor = 'aquamarine'
// })











// Написати скрипт в якому користувач друкує на клавіатурі текст який відображається на сторінці. При натисканні на кнопку “Очистити” очищувати надрукований текст. Використати можна наступну розмітку



// const output = document.querySelector('.js-output')
// const clear = document.querySelector('.js-clear')




// document.addEventListener('keydown', (e) => {
//     output.textContent += e.key

// })

// clear.addEventListener('click', () => {
//     output.textContent = ''
// })

// Змінити текст елементу з id="message" на текст, який користувач вводить у текстове поле з id="input" під час події keypress.

// {/* Вивести код клавіші, яку користувач натиснув, під час події keydown. */}
// {/* Змінити фон елементу з id="box" на жовтий, якщо користувач натискає клавішу y, та на зелений, якщо користувач натискає клавішу g, під час події keydown. */}







// const input = document.getElementById('input');
// const message = document.getElementById('message');

// input.addEventListener('keydown', () => {
//     message.textContent = input.value
// })















