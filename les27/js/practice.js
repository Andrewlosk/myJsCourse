


const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
    

    // Використовуючи 👆 масив об’єктів виконай наступні завдання
    // Отримати масив імен всіх гравців

// const playerNames = players.map((player) => {
//     return player.name
// })

// console.log(playerNames);
    
    // Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)

// const updatedPlayer = players.map((player) => {
//     return {...player, points: Math.round(player.points * 1,1)}
// })

// console.log(updatedPlayer);

    // Збільшити кількість годин гравця по id. Переписати на тернарник


const playerId = 'player-3'

const findPlayer = {...players.find((player) => player.id === playerId)}
findPlayer.timePlayed = 100
console.log(findPlayer);




    // Отримати масив всіх гравців онлайн
    // Отримати масив всіх гравців офлайн
    // Отримати масив всіх хардкорних гравців з часом більше 250
    // Знайти гравця по id
    // Знайти гравця по імені
    // Перевірити чи всі гравці мають час більше 200
    // Перевірити чи всі гравці онлайн
















































