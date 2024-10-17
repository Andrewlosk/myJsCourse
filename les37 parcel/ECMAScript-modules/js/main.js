// import { square, diag } from "./myClass.js";
import * as myClass from "./myClass.js"
//шмпортує всі експорти модуля

console.log(square(5));
console.log(diag(3, 4));

console.log(myClass.square(5));
console.log(myClass.diag(3, 4));


import myFunc from "./myFunc.js";

myFunc()