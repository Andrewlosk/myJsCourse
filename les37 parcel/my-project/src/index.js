alert('hello parcel')

import {nanoid} from 'nanoid'

const id = nanoid()

console.log(id);


import { average } from './average.js';

console.log('Average', average([1,2,3,4,5,6,7,8,9,10]));




import printResult from "./calculator/result.js";
import divide from "./calculator/divide.js";
import multiply from "./calculator/multiply.js";
import subtract from "./calculator/subtract.js";
import add from "./calculator/add.js";




// Головний модуль, який використовує модулі для виконання калькулятора
let a = 10;
let b = 5;


let sum = add(a, b);
let difference = subtract(a, b);
let product = multiply(a, b);
let quotient = divide(a, b);


printResult(sum);
printResult(difference);
printResult(product);
printResult(quotient);