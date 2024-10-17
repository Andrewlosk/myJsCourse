// const btn = document.getElementById{'btn'};
// const button = document.querySelector('#btn');

// value містить в собі поточний текстовий вміст елементів: input, slect, textarea вона дозволяє отримувати або змінювати значення цих елементів

'use strict'


const btnChangeValue = document.querySelector(".btn-input");
const inputValue = document.querySelector(".input");


btnChangeValue.addEventListener('click', () =>{
    inputValue.value = 'new';
});



const checkbox = document.getElementById('checkbox');
const btnStateChange = document.querySelector('.btn-state');



btnStateChange.addEventListener('click', () => {
    checkbox.checked = !checkbox.checked;
});


// name властивісь зберігає значення вказане в HTML атибуті name Вона зазвичай застосовується для відправки форм на сервер


const showBtnName = document.querySelector(".btn-show");
const userName = document.querySelector('#usernameInput');

showBtnName.addEventListener('click', () => {
    alert("name of user:" + userName.name);
    alert("name of user:" + userName.value);
});





// src 


let image = document.getElementById('image');
image.addEventListener('click', () =>{
    image.src = "https://i.insider.com/64c94ded048ff200190f369f?width=700";
});













// elem.textContent — властивість, містить текстовий контент всередині елемента. Доступно для запису, при чому незалежно що буде передано в textContent, дані завжди будуть записані як текст.

const changeTextBtn = document.querySelector('.change-text');
const text = document.querySelector('.text');

changeTextBtn.addEventListener('click', () => {
    text.textContent = 'New TExt';
});




text.style.backgroundColor = 'yellow';
text.style.fontSize = '40px';
text.style.borderRadius = '10px';
text.style.padding = '45px';
text.style.color = 'green';







const example = document.getElementById('example');
const checkButton = document.getElementById('checkButton');
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const replaceButton = document.getElementById('replaceButton');
const toggleButton = document.getElementById('toggleButton');



// elem.classList.contains(cls) - повертає true або false, в залежності від того, чи є в елемента клас cls

checkButton.addEventListener('click', () => {

    const hasClass = example.classList.contains('hightLight');
    console.log(hasClass);

});

addButton.addEventListener('click', () => {
    example.classList.add('italic');

});






removeButton.addEventListener('click', () => {
    example.classList.remove('hightLight');

});
replaceButton.addEventListener('click', () => {
    example.classList.replace('hightLight', 'bold');

});
toggleButton.addEventListener('click', () => {
    example.classList.toggle('hightLight');

});