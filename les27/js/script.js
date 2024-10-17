'use strict'
//імпеерактивений та деклатаративний код


//?перебераючі методи- for arrays

// forEach() - не змінює вихідний масив

const number = [5, 6, 10, 20, 15];

number.forEach((num, index, array) => {
    console.log(`index ${index}, number ${num}, array ${array}`);
})



for(let i = 0; i < number.length; i++){
    console.log(`index ${i}, number ${number[i]}, array ${number}`);
}




// map() - не змінює вихідний масив - використовується зазвичай для трасформації масиву. Старий і новий масив завжди мають однакову довжину


const numbers= [5, 6, 10, 20, 15];

const doubleNumbers = numbers.map(num => {
    return num * 2
})

console.log(doubleNumbers);






const users = [
    {id: 1, name: 'bobik'},
    {id: 2, name: 'ivan'},
    {id: 3, name: 'Shackij'},
]

const userNames = users.map(user => user.name);

console.log(userNames);





//filter() - для фільрації масиву. призначений для відбору елементів, які задовольняють нашу умову в середині коллбек функції

const numbers3 = [1,2,3,4,5,6,7,8,9,10]

const evenNumbers = numbers3.filter(num => {
    return num % 2 === 0
})


console.log(evenNumbers);




// фільтрація масиву обєктів на основі значення властивості

const users2 = [
    {id: 1, name: 'bobik', salary: 12000},
    {id: 2, name: 'ivan', salary: 400},
    {id: 3, name: 'Shackij', salary: 1},
    {id: 4, name: 'Papa Shackij', salary: 10000},
    {id: 3, name: 'Mama Shackij', salary: 2322},

]

const filteredUsers = users2.filter(element => {
    return element.salary > 2500
})

console.log(filteredUsers);





// фільтрація масиву рядків на основі пошукового запиту


const fruits = ['apple', 'banana', 'cherry', 'kiwi']

const seachTerm = 'a';

const machingFruit = fruits.filter(fruit => {
    return fruit.includes(seachTerm)
})


console.log(machingFruit);


//фільрація масиву об'єктів на основі декількох умов


const products = [
    {name: 'Laptop', price: 1000, category: 'Electronics'},
    {name: 'Shirt', price: 100, category: 'Clothing'},
    {name: 'Phone', price: 400, category: 'Electronics'},
    {name: 'Pants', price: 150, category: 'Clothing'}


]



const filteredProductElectronic = products.filter(product => {
    return product.category === 'Electronics' && product.price > 500
})

console.log(filteredProductElectronic);




// видалення дублікатів елемеентів масиву використовуючи filter()


const numbers4 = [3,4,5,5,6,3,5,9,1,2]

const uniqueNumbers = numbers4.filter((value, index, self) => self.indexOf(value) === index)

// self - оригінальний масив який буде фільтруватись
console.log(uniqueNumbers);





// find() - використовуєтья для пошуку і поверненння першого елементу масиву який задовольняє умову

const trees = ['birch', 'maple', 'oak', 'poplar', 'maple']

const findTree = trees.find(tree => tree.includes('m'))

console.log(findTree);



const arrayTrees = [
    {name: 'brich', count: 4},
    {name: 'maple', count: 5},
    {name: 'oak', count: 6},
    {name: 'poplar', count: 8},
    {name: 'brich', count: 9}




]



const findTreeData = arrayTrees.find(tree => tree.count > 3);

console.log(findTreeData);


//? метод every() - повертає true якщо всі елементи пройшли перевірку і false якщо - хоча б один не пройшов (зупиняється на брехні)


const users3 = [
    {name: 'Alice', isPremium: true},
    {name: 'bobik', isPremium: true},
    {name: 'Charlie', isPremium: true},
] 


const isPremiumUser = user => user.isPremium

console.log(users3.every(isPremiumUser));






const formFields = ['name', 'email', 'password'];

const formValues = {name: 'john', email: 'test@gmail.com', password: '123'}

const isFormFielled = (field => field in formValues)

console.log(formFields.every(isFormFielled));




//? some()- якщо б хоча б одна перевірка true тоді він зупиняється та повертає значення true (зупиняється на правді)


const usersForSome = [
    {name: 'Alice', isPremium: true},
    {name: 'bobik', isPremium: false},
    {name: 'Charlie', isPremium: false},
] 



console.log(usersForSome.some(user => user.isPremium));




const formFieldsForSome = ['name', 'email', 'password'];

const formValuesForSome = {name: 'john', email: 'test@gmail.com'}


console.log(formFieldsForSome.some(field => field in formValuesForSome));


















































