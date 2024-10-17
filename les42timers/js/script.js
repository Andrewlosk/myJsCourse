// const greet = (name, greed) => {
//     console.log(`${name}:${greed}`);
    
// }

// setInterval(greet, 2000, 'John', 'hi')



//! секундомір

const secondsOutput = document.getElementById('seconds');
const startBtn = document.getElementById('startSec');
const stopBtn = document.getElementById('stopSec');


let seconds = 0
let timerId

// timerId = setInterval(() => {
//     seconds++

//     console.log(seconds);
    
// }, 1000)






startBtn.addEventListener('click', () => {
    startSec.disabled = true
    timerId = setInterval(() => {
        seconds++
    
        secondsOutput.textContent = seconds
        
    }, 1000)
    secondsOutput.textContent = '0'
})




stopBtn.addEventListener('click', () => {
    startSec.disabled = false
    clearInterval(timerId)
})




//timer зворотнього відліку

// let seconds2 = 10
// const timerId2 = setTimeout(() => {
//     console.log('time is over');
    
// }, seconds2*1000)


const timerInp = document.getElementById('numberId')
const timerBtn = document.getElementById('btnId')
const output = document.getElementById('output')


const startTimer = () => {
    let time = +timerInp.value
    const counter = setInterval(() => {
        time--
        output.textContent = time
        if (time === 0) {
            clearInterval(counter)
            timerBtn.disabled = false
        }
    }, 1000)

}

timerBtn.addEventListener('click', () => {
    timerBtn.disabled = true
    startTimer()
})