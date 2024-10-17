// Розробіть програму для відображення списку користувачів з можливістю видалення окремих користувачів. Використовуйте делегування подій для обробки кліків на кнопках видалення, щоб зменшити кількість обробників подій та спростити код.

/* <ul id="userList">
  <li data-id="1">
    John Doe
    <button class="deleteButton">Delete</button>
  </li>
  <li data-id="2">
    Jane Smith
    <button class="deleteButton">Delete</button>
  </li>
  <li data-id="3">
    Bob Johnson
    <button class="deleteButton">Delete</button>
  </li>
</ul>; */

// index.js;

//task 1
const userList = document.getElementById("userList");

function deleteUser(event) {
    if (event.target.nodeName === 'BUTTON') {
        const item = event.target.parentElement
        console.log(item);
        item.remove()
        // console.log(item.getAttribute('data-id'));
        console.log(item.dataset.id);

    }
}



userList.addEventListener('click', deleteUser)


//task2





// Розробіть програму, яка відображає список завдань з можливістю додавання, видалення та відмітки виконаних завдань. Використовуйте делегування подій для обробки кліків на кнопках видалення та чекбоксах виконаних завдань.

// Отримати посилання на список завдань


// Додати обробник події для додавання нового завдання
// Заборонити стандартну поведінку форми

// Створити новий елемент завдання

// Очистити поле введення

// Додати обробник події для видалення завдання

// Додати обробник події для відмітки виконання завдання


const input = document.querySelector('#newTask')
const btn = document.querySelector('#addTask')
const list = document.querySelector('#taskList')
const form = document.querySelector('form')

const delegationFn = (event) => {
    event.preventDefault()
    if (event.target.nodeName === 'BUTTON') {
        const li = document.createElement('li')
        li.innerHTML = `<input type='checkbox'><span>${input.value}</span> <button class="delete">видалити</button>`
        list.appendChild(li)
        input.value = ''
    
    }
}

form.addEventListener('click', delegationFn)



const handleTaskClick = (event) => {
    if (event.target.nodeName === 'BUTTON') {
        const item = event.target.parentElement
        item.remove()
    }
}

list.addEventListener('click', handleTaskClick)


const colorTask = (event) => {
    if (event.target.type === 'checkbox') {
        event.target.nextSibling.style.color = '#4feb34'
        // event.target.nextSibling.style.color = '#000000'? '#4feb34': '#000000'
        if (event.target.type !== 'checkbox') {
            event.target.nextSibling.style.color = '#000000'
        }

    }
}

list.addEventListener('click', colorTask)