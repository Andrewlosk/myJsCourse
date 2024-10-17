// Створіть об'єкт JSON з інформацією про книгу. Книга повинна мати наступні поля:
// назва книги
// автор книги
// рік видання
// жанр
// Перевірте, що ваш JSON є коректним за допомогою методу JSON.parse().

// const book = {
//     name: 'Harry Potter',
//     author: 'Shackij Baran',
//     year: 1997,
//     kind: 'fantasy'
// }

// const bookCheck = JSON.stringify(book);
// console.log(bookCheck);

// const bookTrans = JSON.parse(bookCheck);
// console.log(bookTrans);

// Запросіть у вашого користувача ім'я та вік за допомогою input. Створіть об'єкт JSON з інформацією про користувача, використовуючи дані, які ви отримали від користувача. Перевірте, що ваш JSON є коректним за допомогою методу JSON.parse().

const nameUser = document.querySelector("#nameUser");
const ageUser = document.querySelector("#ageUser");
const subBtn = document.querySelector("#subBtn");

subBtn.addEventListener("click", () => {
  const user = {
    name: nameUser.value,

    age: ageUser.value,
  };
  const userCheck = JSON.stringify(user);
  console.log(userCheck);

  const userCheck2 = JSON.parse(userCheck);
  console.log(userCheck2);
});




// Напишіть функцію, яка відкриває файл з даними у форматі JSON та повертає об'єкт JavaScript. Файл повинен містити інформацію про список студентів. Для кожного студента повинні бути такі поля:
// ім'я
// прізвище
// рік народження
// номер групи
// оцінки з курсів





const studentsJSON = `[
  {
    "name": "john",
    "surname": "smith",
    "birthYear": "2000",
    "groupNum": "3",
    "grades": {
      "math": "A",
      "physics": "A+"
    }
  },

  {
    "name": "Bob",
    "surname": "ik",
    "birthYear": "2001",
    "groupNum": "2",
    "grades": {
      "math": "F",
      "physics": "F"
    }
  }
  
]`



const getStudentsData = (data) => {
  const students = JSON.parse(data)
  return students
}

console.log(getStudentsData(studentsJSON));





