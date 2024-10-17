//! поширення події

const grandParent = document.getElementById('grandparent')
const parent = document.getElementById('parent')
const child = document.getElementById('child')

const logEvent = (e) => {
    alert(`${e.currentTarget.id}-${e.eventPhase}`)
}

//для фази занурення
grandParent.addEventListener('click', logEvent, true)
parent.addEventListener('click', logEvent, true)
child.addEventListener('click', logEvent, true)


//для фази вспливання
grandParent.addEventListener('click', logEvent)
parent.addEventListener('click', logEvent)
child.addEventListener('click', logEvent)






const outher = document.getElementById('outher')
const middle = document.getElementById('middle')
const inner = document.getElementById('inner')



const handleClick = (event) => {
    alert(`клік на елемент ${event.currentTarget.id}`)
    alert(`клік на вихідний елемент ${event.target.id}`)

    alert('---------------')

}

outher.addEventListener('click', handleClick)
middle.addEventListener('click', handleClick)
inner.addEventListener('click', handleClick)


//палітра кольорів


const colorPalette = document.querySelector('.color-palette')
const output = document.querySelector('.output')


const getRandomColor = () => {
    return Math.round(Math.random() * 256).toString(16).padStart(2,'0')
}

const createPaletteItems = () => {
    const items = [];

    for(let i = 0; i < 60; i++){
        const color = `#${getRandomColor()}${getRandomColor()}${getRandomColor()}`
        const item = document.createElement('button')
        item.dataset.color = color
        item.style.backgroundColor = color
        item.classList.add('item')
        items.push(item)
    }
    colorPalette.append(...items)
}


createPaletteItems()

const selectColor = (event) => {

    //nodeName - поверає назву тегу у верхньому регістрі
    if (event.target.nodeName !== 'BUTTON') return

    const selectedColor = event.target.dataset.color

    output.textContent = `Selected color: - ${selectedColor}`
    output.style.color = selectedColor

}

colorPalette.addEventListener('click', selectColor)




//делегування подій
const buttonContainer = document.getElementById('buttonContainer')





for(let i = 0;i <= 100; i++) {
    const button = document.createElement('button')
    button.textContent = `button ${i}`
    button.dataset.id = i

    buttonContainer.appendChild(button)
}



const addNewButton = () => {
    const newButtonId = buttonContainer.children.length
    const newButton = document.createElement('button')
    newButton.textContent = `newButton ${newButtonId}`
    newButton.dataset.id = newButtonId


    buttonContainer.appendChild(newButton)
}

buttonContainer.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
        const buttonId = event.target.dataset.id
        console.log('натиснуто кнопку з айді' + buttonId);
        
    }
})


const addButton = document.createElement('button')
addButton.dataset.id = 'addNewButton'
addButton.textContent = 'Додати  нову кнопку'
addButton.addEventListener('click', addNewButton)


buttonContainer.appendChild(addButton)





































