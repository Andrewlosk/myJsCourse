//! class Date

const date= new Date()
console.log(date);

// Різниця в часі виникає через те, що час тут показується в стандарті UTC (Universal Time Coordinated), який зазвичай використовується для узгодження часу в різних часових зонах. UTC не враховує часові пояси та переходи на літній або зимовий час, тому може відрізнятися від місцевого часу на кілька годин.

// Зараз у більшості країн Європи діє літній час (CEST), який випереджає UTC на 2 години. Тому, коли тут показує 11:58 (UTC), ваш локальний час — 14:58 (UTC+2).
//!власна дата



const date2 = new Date('2021-05-11')
console.log(date2);

//! створення дати з аргументами
const date3 = new Date(2021,5,11,12,20,10)
console.log(date3);


//! unix час

const dateUnix = new Date(10000000000)
console.log(dateUnix);



console.log(Date.now());



//!створення дати з рядка

// Метод Date.parse(str) читає дату з рядка у форматі YYYY-MM-DDTHH:mm:ss.sssZ

const dateMs = Date.parse('2012-01-26T13:51:50.417+00:00')
console.log(dateMs);



//? Форматування дати

const options = {year: 'numeric', month: 'short', day: 'numeric'}
console.log(date.toLocaleString('uk-UA', options));





//? вимірювання часу

let startDate = Date.now()

for (let i = 0; i < 100000; i++) {
    let doSomething = i * i + i + 1
}

let endDate = Date.now()
console.log(endDate - startDate);


//? методи класу date

//?геттери

console.log(date.getFullYear()); //рік 2024
console.log(date.getMonth()); // місяць 9
console.log(date.getDate()); //день 16
console.log(date.getHours()); // час 19

//?сеттери

date.setFullYear(2025)
date.setMonth(10)
date.setDate(17)
date.setHours(20)

console.log(date);


console.log(new Date().getTime());



//? створення відліку часу
const timerElem = document.getElementById('timer')

const targetDate = new Date('2025-06-01').getTime()

console.log(targetDate);

const countdownTimer = setInterval(() => {
    const nowDate = new Date().getTime()

    const timeRemaining = targetDate - nowDate
    const seconds = Math.floor((timeRemaining / 1000) % 60)
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60)
    const hours = Math.floor((timeRemaining / 1000 / 60 / 60) % 24)
    const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24) 

    // console.log();

    timerElem.textContent = `${days}:${hours}:${minutes}:${seconds}`
    if (timeRemaining < 0) {
        timerElem.textContent = 'time is up'
    }

}, 1000)