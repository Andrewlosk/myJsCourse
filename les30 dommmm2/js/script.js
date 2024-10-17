// //? створення та видалення елементів

// const heading = document.createElement('h1');

// heading.textContent = 'сворення та видалення вузлів';

// console.log(heading);


// //після елементів в середину
// // document.querySelector('.list').append(heading);

// //перед елементами в середину
// // document.querySelector('.list').prepend(heading)



// //перед елементами зовні
// document.querySelector('.hero').before(heading)


// //після елементів зовні
// document.querySelector('.hero').after(heading)
























//? Створення та видалення елементів

//? Створення елементів

const heading = document.createElement("h1");

const text = document.createElement('p')

heading.textContent = "Створення та видалення вузлів";
text.textContent = 'Ціль уроку: Створити нові елементи да додати їх в розмітку'

console.log(heading);

//* element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
// document.querySelector('.list').append(heading)



//* element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
// document.querySelector(".hero").prepend(heading);


//* element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
// document.querySelector(".hero").before(heading);




//* element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.
// document.querySelector(".hero").after(heading, text);



//? appendChild

// document.querySelector(".hero").appendChild(text)




//? insertBefore(elem, nextSibling)



const parentElem = document.querySelector('#parent')
const nextSibling = document.querySelector('#nextSibling')


const newElem = document.createElement('div')
newElem.textContent = 'New element'

parentElem.insertBefore(newElem, nextSibling)



//? видаення 
parentElem.remove()



//! innerHTML

const title = document.querySelector('.title')


console.log(title.textContent);
// textContent - отрмує текст елемента та його нащадків, повертає тільки текст ігнорує HTML 

console.log(title.innerHTML);

//innerHTML - отрмує Html розмітку всередині велемента у вигляді рядка


//* основна різниця між ними полягає в тому, що textContent працює лише з текстовим вмістом, тоді як innerHTML працює з HTML-розміткою. Використовуйте textContent, коли вам потрібен тільки текст, і innerHTML, коли вам потрібно працювати з HTML-розміткою.


title.innerHTML = 'new <b>text</b>';


title.textContent = 'new <b>text</b>';


//? метод insertAdjacentHTML(pos, elem)


const parentElem2 = document.querySelector('.parent-inner')

// "beforeend" - всередині elem, після усіх дітей
parentElem2.insertAdjacentHTML('beforeend', '<div>абзац перед елемента</div>')



parentElem2.insertAdjacentHTML('beforebegin', '<div>абзац перед батьківським елементом</div>')



parentElem2.insertAdjacentHTML('afterbegin', '<div>абзац на почтаку elementa</div>')


parentElem2.insertAdjacentHTML('afterend', '<div>абзац після елемента</div>')








//? атрибути 

// перевірка наявнсоті атрибута


const btn = document.querySelector('#mySaved');


console.log(btn.hasAttribute('class')); // true 
console.log(btn.hasAttribute('data-action')); // true 



console.log(btn.getAttribute('class')); // btn
console.log(btn.getAttribute('data-action')); // save


// встановлення значення атрибута
btn.setAttribute('width', '380')


// видаення атрибута
btn.removeAttribute('class')


//  повертає обєкт усіх атрибутів
btn.attributes











// Створити та додати колекцію кнопок з динамічними даними з масиву об’єктів. використати метод createElement
// Переписати задачу 1 за допомогою методу innerHTML або insertAdjacentHTML



const colorPickerOptions = [
{ label: 'red', color: '#F44336' },
{ label: 'green', color: '#4CAF50' },
{ label: 'blue', color: '#2196F3' },
{ label: 'grey', color: '#607D8B' },
{ label: 'pink', color: '#E91E63' },
{ label: 'indigo', color: '#3F51B5' },
];


const colorPicker = document.querySelector('.js-color-picker')

// colorPickerOptions.forEach(option => {
//     const btn = document.createElement('button');
//     btn.textContent
// })


const buttonHtml = colorPickerOptions.map(option => {
    const markUp = `<button style='background-color: ${option.color}'>${option.label}</button>`
    return markUp;
})

// colorPicker.innerHTML = buttonHtml
colorPicker.insertAdjacentHTML('beforeend', buttonHtml)



// Написати функцію яка буде створювати карточку продукту. Додати карточку в DOM за допомогою методу createElement


const createProductCard = (name, deskr, price) => {
    const article = document.createElement('article');
    article.classList.add('product');

    const title = document.createElement('h2');
    title.textContent = name;
    title.classList.add('product__name')




    const description = document.createElement('p');
    description.textContent = deskr
    description.classList.add('product__descr');


    const productPrice = document.createElement('p');
    productPrice.textContent = `Ціна: ${price} кредитів`
    productPrice.classList.add('product__pridct')

    
    article.appendChild(title)
    article.appendChild(description)
    article.appendChild(productPrice)


    return article
}

const productContainer = document.querySelector('.js-products')


const productCard = createProductCard('apple', 'дуже смачне', 54)

productContainer.appendChild(productCard)




// Переписати задачу 2 за допомогою методу innerHTML або insertAdjacentHTML