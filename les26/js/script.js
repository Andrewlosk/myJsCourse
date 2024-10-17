'use strict';

//? Деструктирізаця обєктів

const person = {
    name: 'john',
    age: 40,
    city: 'lviv'
}


const {name1, age, city, job, isAdmin = false} = person
console.log(name1, age, city, job, isAdmin);

// якшо імені не знайлено то undefined





const person2 = {
    name: 'oliver',
    age: 20,
    // city: 'london'   
}

const {name: personName, age: personAge, city: personCity = 'New York'} = person2

console.log(personName, personAge, personCity);





const hotel = {
    name: 'resort Hotel',
    stars: 5,
    city: 'zhitomir'
}

const {name, ...rest} = hotel

console.log(name, rest);




//? глибока диструктуризація


const options = {
    size: {
        width: 100,
        height: 200
    },
    items : ['cake', 'donut'],
    extra: true
}



const {
    size,
    size: {
        width,
        height
    },
    items,
    items: [item1, item2],
    extra,
    title = 'menu'
} = options

console.log(size, width, height, items, item1, item2 ,extra, title);



//pseudoArray
const fn = function() {
    console.log(arguments);
}


fn(6, 4, 5, 3, 5, 3, 1)



// деструктуризація масивів

const rgb = [200, 255, 100]

let red, green, blue;

[red, green, blue, alfa = 0.4] = rgb

console.log(red, green, blue, alfa);




const rgb2 = [200, 255, 100, 300]

const [red1, green1, ...colors] = rgb2


console.log(red1, green1, ...colors);



//? елементи можна пропускати




const rgb3 = [200, 255, 100, 300]

const [, , blue1] = rgb3

console.log(blue1);








// Деструктуризувати наступні об’єкти
// Об’єкт user
const user = {
name0: 'John',
age0: 30,
email: 'john@example.com'
}

const {name0, age0, email} = user
console.log(name0, age0, email);


// Об’єкт car
const car = {
make: 'Toyota',
model: 'Camry',
year: 2020,
features: ['power windows', 'rear camera', 'navigation'],
safety: {
airbags: true,
antilock_brakes: true,
stability_control: true
}
}

const {make, model, year, features, features: [feature1, feature2, feature3], safety, safety: {airbags, antilock_brakes, stability_control}} = car

console.log(make, model, year, features, feature1, feature2, feature3, safety, airbags, antilock_brakes, stability_control);





// Об’єкт movie
const movie = {
title1: 'The Shawshank Redemption',
director: {
name2: 'Frank Darabont',
nationality: 'American'
},
actors: ['Tim Robbins', 'Morgan Freeman'],
release_year: 1994,
ratings: {
imdb: 9.3,
rotten_tomatoes: 90
}
}

const {title1, director, director: {name2, nationality}, actors, actors: [person1, person3], release_year, ratings, ratings: {imdb, rotten_tomatoes} } = movie

console.log(title1, director, name2, nationality, actors, person1, person2, release_year, ratings, imdb, rotten_tomatoes );

// Об’єкт books
const books = {
count: 3,
list: [
{
title: 'The Great Gatsby',
author: 'F. Scott Fitzgerald',
year: 1925
},
{
title: 'To Kill a Mockingbird',
author: 'Harper Lee',
year: 1960
},
{
title: '1984',
author: 'George Orwell',
year: 1949
}
]
}



