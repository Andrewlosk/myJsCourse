"use strict";

// && - i (and)

// || - або (or)

// ! - ні (no)

// && - завжди зупиняється на брехні завжди
const num = 20;
const result = num > 10 && num < 30;
console.log(result);

console.log("Im true" && false && ["im true too"]);
console.log("Im true" && null && ["im true too"]);
console.log("Im true" && ["im true too"] && "");

// логічне значення || - завжди зупиняється на правді
console.log(false && false && true);
console.log(false || false || true);

console.log(false || "я правдивий" || false);
console.log(false || "я правдивий" || "rick and morty");
console.log(false || "" || undefined || null);

// !
console.log(!true);
console.log(!false);
console.log(!1);
console.log(!0);
console.log(!"");

//! оператори розгалуження

// if
if (true) {
  console.log("hello");
}

const year = +prompt("в якому році була опублікованна 2015");

if (year === 2015) {
  alert("super!!!!<3");
} else {
  alert("unlucky");
}

// if ...  else

if (100 < 50) {
  console.log("перша умова вірна");
} else {
  console.log("пеерша умова не вірна");
}

if (year < 2015) {
  alert("зарано");
} else if (year > 2015) {
  alert("to late");
} else {
  alert("yeah");
}

const salary = 500;
if (salary >= 1000 && salary < 2000) {
  console.log("lvl 1");
} else if (salary >= 2000 && salary < 3000) {
  console.log("lvl 2");
} else if (salary > 3000) {
  console.log("lvl 3");
} else {
  console.log("work more");
}

// тернарний оператор

// синтаксис

// let result = умова ? значення 1 : значення 2

const age = +prompt("how old are u", "");
let accessAlowed = age > 18 ? true : false;
console.log(accessAlowed);

if (age > 18) {
  accessAlowed = true;
} else {
  accessAlowed = false;
}
console.log(accessAlowed);

const balance = 1000;
const message = balance > 1 ? "pos" : "neg";

// декілька "?"

let ageUser = 320;
let answer =
  ageUser < 3
    ? "hi"
    : ageUser < 18
    ? "hello"
    : ageUser < 100
    ? "bless u"
    : "незвичайний вік";
console.log(answer);
