const load = (key) => {
    try {

        //отримуємо данні з локальногг сховища під ключем key
        const getData = localStorage.getItem(key);

        // якщо немає данних повертається null  і ми робимо перевірку зо якщо в нас нічого немає тоді ми повертаємо undefained якщо данні є тоді ми данні парсимо
        return getData === null ? undefined : JSON.parse(getData)
    } catch (err) {

        //у випадку помилки наприклвд під час парсингу, тоді вона буде виведена у консоль

        console.log(err);
        
    }
}




const save = (key, value) => {
    try {
        const setData = JSON.stringify(value);
        localStorage.setItem(key, setData)
    } catch (err) {
        console.log(err);
        
    }
}

const exampleStorage = {
    "name": "Ira",
    "age": 21
}




save("storageSaveName", exampleStorage)
save("isStudents", true)


console.log(load('storageSaveName'));


// 3


const remove = (key) => {
    try {
        localStorage.removeItem(key)
    } catch (err) {
        console.log(err);
        
    }
}


// remove('storageSaveName')






// Створіть функцію, яка буде додавати об'єкт в localStorage. Назва об'єкту має бути ключем, а сам об'єкт - значенням.
// Створіть функцію, яка буде отримувати значення з localStorage за ключем і повертати його як результат функції.
// Створіть функцію, яка буде видаляти значення з localStorage за ключем.

// Створіть функцію, яка буде очищувати localStorage.
// Створіть функцію, яка буде повертати кількість елементів в localStorage.
// Створіть функцію, яка буде повертати масив ключів з localStorage.

// Створіть функцію, яка буде перевіряти, чи існує об'єкт в localStorage за ключем.



// Створіть функцію, яка буде перевіряти, чи існує значення в localStorage.



// Створіть функцію, яка буде додавати нове значення до масиву, збереженого в localStorage.
// Створіть функцію, яка буде видаляти останній елемент з масиву, збереженого в localStorage.



const clear = () => {
    
    localStorage.clear()
    
}

// clear()




// 2

const getLocalStorageLength = () => {
    
    return localStorage.length
    
}

console.log(getLocalStorageLength());



//3
const getKeysFromLocalStorage = () => {
    return Object.keys( localStorage )
}


console.log(getKeysFromLocalStorage());



//4

const keyCheckInLocalStorage = (key) => {
    try {

        const data = localStorage.getItem(key)
        return data === null ? undefined : JSON.parse(data)
    } catch (err) {
        console.log(err);
        
    }
}



console.log(keyCheckInLocalStorage("isStudents"));



// Створіть функцію, яка буде додавати нове значення до масиву, збереженого в localStorage.

const arrayKeys = [{age: 24, generation: 'male'}]

const addFnLocalStorage = (key, value) => {
    const existingKey = keyCheckInLocalStorage(key) || []
    if (Array.isArray(existingKey)) {
        existingKey.push(value)
        save(key, existingKey)
        
    }
}

// console.log(addFnLocalStorage('jora', arrayKeys));

addFnLocalStorage('numbers', 5)
addFnLocalStorage('numbers', 3)
addFnLocalStorage('numbers', 7)
addFnLocalStorage('numbers', 1)



console.log(load('numbers'));

