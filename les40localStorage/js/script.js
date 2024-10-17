//! запис данних у локал сторедж


//? Метод setItem(key, value) використовується для зберігання даних. Дані зберігаються у вигляді пари "ключ-значення". Значення обов’язково має бути рядком (string).


localStorage.setItem("username", "John")

localStorage.setItem("age", "17")
localStorage.setItem("theme", "light")


const user = {name: "Yulia", age: 21}

localStorage.setItem("user", JSON.stringify(user))




const settings = {
    theme: "dark",
    isAuthorized: true,
    options: [1,2,3]
}

localStorage.setItem('settings', JSON.stringify(settings))


//! reading data from localStorage

//? Метод getItem(key) використовується для отримання значення за певним ключем.

const username = localStorage.getItem('username')

console.log(username); //John


const theme = localStorage.getItem('theme')

console.log(theme); //light



const userFromStorage = localStorage.getItem('user')
console.log(userFromStorage);
const parsedUser = JSON.parse(userFromStorage)
console.log(parsedUser);


const settingsFromStorage = localStorage.getItem('settings')
const parsedSettings = JSON.parse(settingsFromStorage)
console.log(parsedSettings);




//! видалення
//? Метод removeItem(key) використовується для видалення елементу за ключем

localStorage.removeItem('age')

// перевірка видалених данних

console.log(localStorage.getItem('age')); //null



//!очищення сховища



//? Метод clear() видаляє всі дані з localStorage.
// Очищуємо весь localStorag


localStorage.clear()

console.log(localStorage.getItem('user'));



// const userExample = {
//     name: 'bob',
//     age: 13
// }

// console.log(JSON.parse(userExample));
