'use strict';

const inp = document.querySelector('.input')
const btn = document.querySelector('.btn')
const area = document.querySelector('.newField')


btn.addEventListener('click', () => {
    const newText = inp.value;
    area.textContent = newText;
})

// =================================================================================

const button = document.querySelector('.button')

button.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(this);

})



// ==================================================================
const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();
})



// =========================
const form = document.querySelector('.form');
const loginInput = form.querySelector('input[type="text"]')
const passInput = form.querySelector('input[type="password"]')

function handleSubmit(event) {
    event.preventDefault();


    const login = loginInput.value.trim();
    const password = passInput.value;
    if(login === "" || password === "") {
        return alert ('pz write norm infy plssss')
    }
    form.reset();
    alert( `
    дякую за регістрацію
    логін ${login}
    pass ${password}
    `)
}

form.addEventListener('submit', handleSubmit)
