// Потрібно затримати виконання функції при введенні тексту в поле input, щоб не перевантажувати сервер. Використовуйте метод throttle з бібліотеки lodash. Встановіть час затримки в мілісекундах, наприклад 500мс, і передайте функцію, яку потрібно виконати при введенні тексту.


const inputPractice = document.querySelector('.inputPractice');

const handleInput = () => {
    const inputValue = inputPractice.value
    console.log(inputValue);
}

inputPractice.addEventListener('input', _.throttle(() => {
    handleInput()
}, 1000))

inputPractice.addEventListener('input', _.debounce(() => {
    handleInput()
}, 1000))






//task 2


// body.addEventListener('mousemove', (e) => {
//     const clientX = e.clientX;

//     const clientY = e.clientY;

//     const pageX = e.pageX;

//     const pageY = e.pageY;

//     info.textContent = `clientX: ${clientX}, clientY: ${clientY}, pageX: ${pageX}, pageY: ${pageY}`
//     body.style.backgroundColor = 'lightblue'

// })





const graph = document.querySelector('#graph');
const point = document.getElementById('point')
const coord = document.getElementById('coord')


graph.addEventListener('mousemove', _.throttle((event) => {
    const offsetBox = graph.getBoundingClientRect();
    const x = event.clientX-offsetBox.left;
    const y = event.clientY-offsetBox.top;
    point.setAttribute('cx', x);
    point.setAttribute('cy', y);
    coord.textContent = `X:${x}, Y:${y}`
    // console.log(x, y);

}, 100))


