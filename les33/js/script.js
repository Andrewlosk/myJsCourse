

const throttledFunction = _.throttle(() => {
    console.log('throttled');
}, 1000)

window.addEventListener('scroll', throttledFunction)




// console.log(_.add(2, 2));

const vannilaOutput = document.querySelector('.output.vannila')
const throttleOutput = document.querySelector('.output.throttled')
const debounceOutput = document.querySelector('.output.debounced')


let scrollEventCount = 0;

const eventCounter = {
    vannila: 0,
    throttle: 0,
    debounce: 0
}

document.addEventListener('scroll', () => {
    eventCounter.vannila+=1;
    vannilaOutput.textContent = eventCounter.vannila
})

document.addEventListener('scroll', _.throttle(() => {
    eventCounter.throttle+=1;
    throttleOutput.textContent = eventCounter.throttle
}, 100))


document.addEventListener('scroll', _.debounce(() => {
    eventCounter.debounce+=1;
    debounceOutput.textContent = eventCounter.debounce
}, 100, {
    leading: false,
    trailing: true
}))








// приклад з інпутами

const input = document.querySelector('.input');
const defaultOutput = document.getElementById('default');
const debounceOutput1 = document.getElementById('debounce');
const throttleOutput1 = document.getElementById('throttle');




input.addEventListener('input', (event) => {
    defaultOutput.textContent = event.target.value
})

input.addEventListener('input', _.throttle((event) => {
    throttleOutput1.textContent = event.target.value
}, 300))

input.addEventListener('input', _.debounce((event) => {
    debounceOutput1.textContent = event.target.value
}, 300))






















