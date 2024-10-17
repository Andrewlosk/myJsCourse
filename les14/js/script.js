'use strict';

// Напиши скрипт вибору готеля по кількості зірок.
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
// Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
// 'Токої кількості зірок немає'

const inp = document.querySelector('.inp');
const btn =  document.querySelector('.check');

btn.addEventListener('click', () => {
    switch (inp.value) {
        case '1':
            alert('20$')
            break;
        case '2':
            alert('30$')
            break;
        case '3':
            alert('50$')
            break;
        case '4':
            alert('70$')
            break ;
        case '5':
            alert('120$')
            break; 
        default:
            alert('Токої кількості зірок немає')              
    }
});




// Змінна lang може приймати 4 значення: 'ua', 'en', 'ru', 'fr'. За допомогою конструкції switch виведи на екран назву місяця в залежності від обраної мови. Наприклад, якщо lang = 'fr', то в консоль виводимо "Janvier".


const lang = prompt(`lang`);
let month = +prompt("num of month");

switch (lang) {
    case 'ua':
        switch (month) {
            case 1:
                alert('січень');
                break;
            case 2:
                alert('лютий');
                break;
            case 3:
                alert('березень');
                break;
            default:
                alert('not correct')
                break;

        }
        break;


        
    case 'en':
        switch (month) {
            case 1:
                alert('january');
                break;
            case 2:
                alert('February');
                break;
            case 3:
                alert('March');
                break;
                                               
        } 
        break;   
    }        