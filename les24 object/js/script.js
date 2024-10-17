'use strict'

const hotel = {
    name: 'resort hotel',
    stars: 5,
    capacity: 100,
    guest: ['ddd', 'ddds', 'dsda']
}


//? доступ до влативостей обєкта
console.log(hotel.name);
console.log(hotel.guest[1]);



console.log(hotel['stars']);


//?зміна властивостей обєкта
hotel.name = 'coast resort'

console.log(hotel.name);

console.log(hotel);



hotel['stars'] = 4;
console.log(hotel['stars']);


//додавання властивостей обєкта

hotel.manager = 'Vasa';
console.log(hotel);

//or

hotel['address'] = 'nazaria 34'
console.log(hotel);



//? delete властитвостей обєкта

delete hotel.name

console.log(hotel);

//or

delete hotel['guest']
console.log(hotel);



//? відсутні властивості

console.log(hotel.pool);







// короткий запис
let name = 'res hotel';
let stars = 5;

//ES5 стандарт застарілий
const es5Hotel = {
    name: name,
    stars: stars,
    manager: 'василь'
}


const es6Hotel = {
    name,
    stars,
    manager: 'ivan'
}




console.log(es6Hotel, es5Hotel);


//? обчислювальні влстивості

const key = 'person';
const getKey = function (){
    return 'age'
}


const obj = {
    [key]: 'illa',
    [getKey()]: 16
}

console.log(obj);







//методи обєкта




const hotel1 = {
    name: 'resort hotel',
    stars: 5,
    capacity: 100,
    guest: ['ddd', 'ddds', 'dsda'],

    //ES5 old standart
    greethES5: function() {
        console.log('welcome');
    },

    //ES6 new standart
    greethES6() {
        console.log('welcome');
    }
}


hotel1.greethES5()
hotel1.greethES6()





hotel1.greeth = function() {
    console.log(' welcome 1');
}

console.log(hotel1);
hotel1.greeth()

//?доступ до обєкту методу через .this










const hotel2 = {
    name: 'resort hotel',
    stars: 5,
    capacity: 100,
    guest: ['ddd', 'ddds', 'dsda'],
    showName() {
        console.log(this.name);
    },
    changeCapacity(value) {
        return this.capacity = value
    }
}

hotel2.showName()

hotel2.changeCapacity(200)

console.log(hotel2.capacity);


hotel2.sayNameArrow()











// Створіть об'єкт "person" з властивостями "name", "age", "gender". Додайте до об'єкту метод, який буде виводити на екран повідомлення про особистість зі значеннями всіх властивостей.



const person = {
    name: 'bobik',
    age: '22',
    gender: 'no ordered',
    showPerson() {
        console.log(this.name, this.age, this.gender);
    }
}




person.showPerson()




// task





const students = [ 
{
    name: 'Alice',
    age: 15,
    gender: 'fem',
    grade: 4
},
{
    name: 'ivan',
    age: 14,
    gender: 'male',
    grade: 8
},
{
    name: 'shatchii',
    age: 10,
    gender: 'male',
    grade: 10
}
]

const averageRate = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].grade
    }
    return Math.round(sum / array.length)
}

console.log(averageRate(students));








// Створіть об'єкт "book" з властивостями "title", "author", "year" та "genre". Додайте до об'єкту метод, який дозволить змінювати значення властивостей.


const book = {
    title:'NAME of Book',
    author: 'Nazarii',
    genre: 'comedy',
    changeProperty: function(property, value) {
        // метод для зміни значень властивостей
        if (this.hasOwnProperty(value)) {
            return this[value] = property
        }else {
            console.log('такої властивості не існує');
        }
        
    }


}


console.log(book.changeProperty('Andrii', 'author'));
console.log(book);








// Працюємо з колекцією товарів в кошику:
// Написати методи вказані нижче в коді




const cart = {
    items: [
        { name: '🍎', price: 50 },
        { name: '🍇', price: 70 },
        { name: '🍋', price: 60 },
        { name: '🍓', price: 110 }
    ],
    getItems() {
        this.items;
    },
    add(product) {
        this.items.push(product)
    },
    remove(productName) {

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name === productName) {
                delete this.items[i]
            }
        }
    },
    clear() {
        this.items = []
    },
    countTotalPrice() {
        let sum = 0;
        for (let i = 0; i < this.items.length; i++) {
            sum += this.items[i].price;
        }
        return sum
    },
    increaseQuantity(productName) {
        for (let i = 0; i < this.items.length; i++){
            if (this.items[i].name === productName) {
                this.items[i].quantity += 1;       
            }
        }
    },
    decreaseQuantity(productName) {
        for (let i = 0; i < this.items.length; i++){
            if (this.items[i].name === productName) {
                this.items[i].quantity -= 1;       
            }
        }
    },
  };


console.log(cart.items);
cart.getItems()
console.log(cart.items);
cart.add({name:'🌹', price:330})
console.log(cart.items);
cart.remove
console.log(cart);
console.log(cart);
console.log(cart);
console.log(cart);
console.log(cart);
console.log(cart);


// 4. Супертворчі завдання
// Учні можуть додати роботу з DOMом до попередньої задачі
//      /* стилі для розмітки */
//     .cart {
//       border: 1px solid black;
//       padding: 10px;
//       width: 300px;
//       margin: 20px;
//     }


//     .cart h2 {
//       text-align: center;
//     }


//     .cart button {
//       margin: 5px;
//     }


//     .cart .items {
//       list-style-type: none;
//       padding-left: 0;
//     }


//     .cart .item {
//       display: flex;
//       justify-content: space-between;
//       margin-bottom: 5px;
//     }


//     .cart .item button {
//       margin: 0;
//       padding: 0;
//       font-size: 14px;
//       background-color: white;
//       border: none;
//       cursor: pointer;
//       color: blue;
//       text-decoration: underline;
//     }


//     .cart .item button:hover {
//       color: red;
//     }
//     <div class="cart">
//     <h2>Кошик товарів</h2>
//     <ul class="items"></ul>
//     <button class="add">Додати товар</button>
//     <button class="clear">Очистити кошик</button>
//     <button class="increase">Збільшити кількість товару</button>
//     <button class="decrease">Зменшити кількість товару</button>
//     <button class="remove">Видалити товар</button>
//   </div>```






























































































































































