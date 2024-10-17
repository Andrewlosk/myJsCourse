

'use strict';

console.log('цього повідомлення не буде');
// cos value = 3;


// hoisting - підняття змінних на початк області видимості




// practice

const mid = function (arrayNumber) {
    let sum = 0
    for (let i = 0; i < arrayNumber.length; i++) {
        sum += arrayNumber[i]

    }
    return sum / arrayNumber.length

}


console.log(mid([1, 2]));



// 1) Створіть функцію, яка обчислюватиме об'єм і площу повної поверхні куба (теж базова математика, іноді використовується у створенні анімацій). Ця функція приймає в себе ціле число зі значенням довжини ребра куба. Відповідь виведіть у форматі рядка, який зображений у прикладах.
// Якщо у функцію потрапив неправильний аргумент або обчислити значення неможливо - повернути рядок "При обчисленні сталася помилка"
// НЕ ВИКОРИСТОВУЙТЕ ОПЕРАТОР СТУПЕНЯ ** - в онлайн середовищі браузера він не працює і тести будуть ламатися. Це через те, що цей оператор із новішого стандарту, ніж тут доступний.
// Приклади:
// calculateVolumeAndArea(5) => 'Об'єм куба: 125, площа всієї поверхні: 150'
// calculateVolumeAndArea(15) => 'Об'єм куба: 3375, площа всієї поверхні: 1350'
// calculateVolumeAndArea(15.5) => 'Під час обчислення сталася помилка'
// calculateVolumeAndArea('15 ') => 'Під час обчислення сталася помилка'
// calculateVolumeAndArea(-15) => 'Під час обчислення сталася помилка'


const area = function(side = 1) {
    if (side <= 0 || typeof side === 'string' || !Number.isInteger(side)) {
        return console.log('При обчисленні сталася помилка');        
    }
    const area =  6 * Math.pow(side, 2);
    const totalArea =  Math.pow(side, 3);
    
    return console.log(`об'єм куба: ${area}, площа всієї поверхні: ${totalArea}` );
}


area(5)
area(15)
area(15.5)
area('15 ')
area(-15)




// Напиши функцію яка повертає буль як результат перевірки числа на парність:

let checkNumber = function(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(checkNumber(3));