//? перебираючі методи масиву


//? reduce() - 

const numbers = [1,2,3,4,5,6,7,8]

const totalNum = numbers.reduce((acc, value) => acc + value, 0)

//0 - початкове значення акумулятора (acc), якщо його немає то присвується перше значення до (acc)
console.log(totalNum);


// Task 2

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];


// const totalLikes = tweets.reduce((sum, tweet) => sum + tweet.likes, 0);

// console.log(totalLikes);





const getTags = (array) => {
    return array.reduce((alltags, tweet) => {
        alltags.push(...tweet.tags)
        return alltags
    }, [])
    
}

console.log(getTags(tweets));



const getTagsStats = (acc, tag) => {
    // чи має обєкт такий ключ true false
    if (!acc.hasOwnProperty(tag)) {
        acc[tag] = 0;
    }

    acc[tag] += 1;
    

    

    return acc 
}

const countTags = tags => tags.reduce(getTagsStats, {})

console.log(countTags(getTags(tweets)));





//? sort() - для того щоб сортувати елементи масиву, змінює початковий масив


const numbersSort = [3,2,4,7,1,5,0, 11, 55];

console.log(numbersSort.sort());
// [
//     0, 1, 11, 2, 3,
//     4, 5, 55, 7
//   ]
console.log(numbersSort.sort((a,b) => a - b));
// [
//     0, 1,  2,  3, 4,
//     5, 7, 11, 55
//   ]
console.log(numbersSort.sort((a,b) => b - a));
// [
//     55, 11, 7, 5, 4,
//      3,  2, 1, 0
//   ]








const clients = ['alex', 'mango', 'maks', 'ivan']
console.log(clients.sort());


const usersForSort = [
    {name: 'alex', daysActive: 15},
    {name: 'ivan', daysActive: 12},
    {name: 'maks', daysActive: 2},
    {name: 'Nika', daysActive: 4},
]


const sortByActive = (a, b) => a.daysActive - b.daysActive;
const sortByActiveWay = (a, b) => b.daysActive - a.daysActive;



console.log(usersForSort.sort(sortByActive));
console.log(usersForSort.sort(sortByActiveWay));




const sortNames = (a,b) => a.name.localeCompare(b.name)
// localCompare - метод порівнює дві стоки в поточній локалі і повертає -1, 0, 1 в залежності від сторування


console.log(usersForSort.sort(sortNames));





// Порахувати загальну кількість годин
// Відсортувати по кількості проведенного часу в грі

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
    ];

const totalHours = players.reduce((acc, player) => acc + player.timePlayed, 0)
console.log(totalHours);

const sortedPlayers = players.sort((a, b) => a.timePlayed - b.timePlayed)

console.log(sortedPlayers);




// Порахувати загальну кількість товарів в кошику






const cart = [
{ label: 'Apples', price: 100, quantity: 2 },
{ label: 'Bananas', price: 120, quantity: 3 },
{ label: 'Lemons', price: 70, quantity: 4 },
];


const totalQuantity = cart.reduce((acc, product) => acc + product.quantity, 0)
console.log(totalQuantity);




// Відсортувати масив об'єктів за алфавітом в полі name:
const arr = [
{ name: 'John', age: 32 },
{ name: 'AJane', age: 26 },
{ name: 'Mike', age: 42 },
{ name: 'Emily', age: 29 }
];

// const namesArr = [];

// for (let i = 0; i < arr.length; i++) {
//     namesArr.push(arr[i].name)
// }


const sortedArr = (a, b) => a.name.localeCompare(b.name)

console.log(arr.sort(sortedArr));




// Зібрати всі теги з твітів.
// Зробити статистику всіх тегів. Назву тега потрібно зробити ключем, значення якого буде кількістьповторень тегів в масиві. Якщо властивість з ключем tag є, збільшуємо його значення на 1 якщо властивості немає с таким ключем що в tag, створити і записати 1

const tweets1 = [
{ id: '000', likes: 5, tags: ['js', 'nodejs'] },
{ id: '001', likes: 2, tags: ['html', 'css'] },
{ id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
{ id: '003', likes: 8, tags: ['css', 'react'] },
{ id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];


const totalTags = tweets1.reduce((acc, tweet) => {
    tweet.tags.forEach(tag => {
        acc[tag] = (acc[tag] || 0) + 1
    })
    return acc
},{})
console.log(totalTags);






// Відсортуйте масив об'єктів за спаданням значення властивості price, а при однаковому значенні price - за зростанням значення властивості quantity.



const products = [
{ name: 'Product 1', price: 100, quantity: 5 },
{ name: 'Product 2', price: 50, quantity: 10 },
{ name: 'Product 3', price: 200, quantity: 2 },
{ name: 'Product 4', price: 50, quantity: 5 }
];


const sortedProducts = (a, b) => {
    if (a.price === b.price) {
        return a.quantity - b.quantity
    }else {
        return b.price - a.price
    }

};
console.log(products.sort(sortedProducts));