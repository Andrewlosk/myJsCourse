// Деструктуризувати наступні об’єкти
// Об’єкт user
// const user = {
//   name0: "John",
//   age0: 30,
//   email: "john@example.com",
// };

// const { name0, age0, email } = user;
// console.log(name0, age0, email);

// // Об’єкт car
// const car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2020,
//   features: ["power windows", "rear camera", "navigation"],
//   safety: {
//     airbags: true,
//     antilock_brakes: true,
//     stability_control: true,
//   },
// };

// const {
//   make,
//   model,
//   year,
//   features,
//   features: [feature1, feature2, feature3],
//   safety,
//   safety: { airbags, antilock_brakes, stability_control },
// } = car;

// console.log(
//   make,
//   model,
//   year,
//   features,
//   feature1,
//   feature2,
//   feature3,
//   safety,
//   airbags,
//   antilock_brakes,
//   stability_control
// );

// // Об’єкт movie
// const movie = {
//   title1: "The Shawshank Redemption",
//   director: {
//     name2: "Frank Darabont",
//     nationality: "American",
//   },
//   actors: ["Tim Robbins", "Morgan Freeman"],
//   release_year: 1994,
//   ratings: {
//     imdb: 9.3,
//     rotten_tomatoes: 90,
//   },
// };

// const {
//   title1,
//   director,
//   director: { name2, nationality },
//   actors,
//   actors: [person1, person3],
//   release_year,
//   ratings,
//   ratings: { imdb, rotten_tomatoes },
// } = movie;

// console.log(
//   title1,
//   director,
//   name2,
//   nationality,
//   actors,
//   person1,
//   person3,
//   release_year,
//   ratings,
//   imdb,
//   rotten_tomatoes
// );

// Об’єкт books
// const books = {
//   count: 3,
//   list: [
//     {
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       year: 1925,
//     },
//     {
//       title: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       year: 1960,
//     },
//     {
//       title: "1984",
//       author: "George Orwell",
//       year: 1949,
//     },
//   ],
// };

// // const {
// //   count,
// //   list,
// //   list: [{ title, author, year }],
// // } = books;

// const {
//   count,
//   list: [item1, item2, item3],
// } = books;
// const { title: title0, author: author0, year: year0 } = item1;
// const { title: title2, author: author2, year: year2 } = item2;
// const { title: title3, author: author3, year: year3 } = item3;

// console.log(title2);

// console.log(author0);








// Провести глибоку деструктуризацію об’єкту



const musicLibrary = {
    count: 2,
    artists: [
      {
        name: 'The Beatles',
        albums: [
          {
            title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
            year: 1967,
            tracks: [
              { title: 'With a Little Help from My Friends', duration: '2:44' },
              { title: 'Lucy in the Sky with Diamonds', duration: '3:28' },
              { title: 'A Day in the Life', duration: '5:33' }
            ]
          },
          {
            title: 'Abbey Road',
            year: 1969,
            tracks: [
              { title: 'Come Together', duration: '4:19' },
              { title: 'Something', duration: '3:01' },
              { title: 'Here Comes the Sun', duration: '3:06' }
            ]
          }
        ]
      },
      {
        name: 'Pink Floyd',
        albums: [
          {
            title: 'The Wall',
            year: 1979,
            tracks: [
              { title: 'Another Brick in the Wall, Part 2', duration: '3:59' },
              { title: 'Comfortably Numb', duration: '6:23' },
              { title: 'Hey You', duration: '4:40' }
            ]
          },
          {
            title: 'Dark Side of the Moon',
            year: 1973,
            tracks: [
              { title: 'Speak to Me/Breathe', duration: '3:58' },
              { title: 'Time', duration: '7:06' },
              { title: 'Money', duration: '6:22' }
            ]
          }
        ]
      }        
    ]
}






const {
    count,
    artists,
    artists: [
        item1,
        item2
    ]

} = musicLibrary;


const {
    name,
    albums,
    albums: [
        block1,
        block2
    ]
} = item1


const {
    title,
    year,
    tracks,
    tracks: [
        {title: titleTrack1},
        {title: titleTrack2},
        {title: titleTrack3}
    ]
} = block1

const {
    title2,
    year2,
    tracks2,
    tracks: [
        {title: titleTrack4},
        {title: titleTrack5},
        {title: titleTrack6}
    ]
} = block2







const {
    name1,
    albums1,
    albums: [
        block3,
        block4
    ]
} = item2


const {
    title3,
    year3,
    tracks3,
    tracks: [
        {title: titleTrack7},
        {title: titleTrack8},
        {title: titleTrack9}
    ]
} = block3

const {
    title4,
    year4,
    tracks4,
    tracks: [
        {title: titleTrack10},
        {title: titleTrack11},
        {title: titleTrack12}
    ]
} = block4




console.log(titleTrack8);