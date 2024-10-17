//!Секундомір з точністю до мілісекунд з можливістю запуску, призупинки та скидання

const startTimerBtn = document.getElementById('startBtn')
const stopTimerBtn = document.getElementById('stopBtn')
const resetTimerBtn = document.getElementById('resetBtn')
const timeDisplay = document.getElementById('timeDisplay')


let elapsetTime = 0 //? загальний час у мілісекундах

let timerDisplayInterval;



const formatTime = (time) => {
    const hours = Math.floor(time / 3600000)
    const minutes = Math.floor(time / 60000)
    const seconds = Math.floor(time / 1000)
    const milliseconds = time % 1000

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`
}



const startTimer1 = () => {
    if (!timerDisplayInterval) {
        timerDisplayInterval = setInterval(() => {
            elapsetTime+=10
            timeDisplay.textContent = formatTime(elapsetTime)
        },10)
    }
}




const stopTimer = () => {
    clearInterval(timerDisplayInterval)
    timerDisplayInterval = null
    
}

const resetTimer = () => {
    stopTimer()
    elapsetTime = 0
    timeDisplay.textContent = '00:00:00:000'
}

startTimerBtn.addEventListener('click', startTimer1)
stopTimerBtn.addEventListener('click', stopTimer)
resetTimerBtn.addEventListener('click', resetTimer)



// Таймер, який починає відлік з 5 хвилин та зменшує час кожну секунду



const timeTask = document.getElementById('timeTask');
const startTaskBtn = document.getElementById('startTaskBtn')

let totalTime = 1*10
let timerIdInterval;


const renderTime = () => {
    timerIdInterval = setInterval(() => {
        
        let minutes = Math.floor(totalTime / 60)
        let seconds = totalTime % 60

        timeTask.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

        totalTime--

        if (totalTime < 0) {
            clearInterval(timerIdInterval)
        }
    }, 1000)
}

startTaskBtn.addEventListener('click', renderTime)





//!
const catImg = document.getElementById('catImg')

setInterval(() => {
    catImg.classList.add('animate__animated', 'animate__bounce')
    setTimeout(() => {
        catImg.classList.remove('animate__animated', 'animate__bounce')
    }, 2000)
}, 4000)