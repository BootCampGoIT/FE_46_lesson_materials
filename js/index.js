import { createMarkup, createMarkup1 } from "./helpers.js";

document.querySelector(".ul1").innerHTML = createMarkup(
  ["Home", "About", "Contacts"],
  "headerLink"
);
document.querySelector(".ul2").innerHTML = createMarkup1(
  ["Mobiles", "Notes", "sfdsdfsdfsdsdfs", "ggddgdd"],
  "navigationLink"
);

// console.log("func");

// function getName(name, age = 100) {
//   console.log(`Hello ${name}!`);
//   console.log(`I'm ${age}!`);
// }

// getName("Alex", 20);
// getName("Nick");
// ==================================

// const getName = function (name, age = 100) {
//   // console.log(`Hello ${sghhgdhdhdf}!`);
//   // console.log(`I'm ${ssvsdvsddsvsvsd}!`);
//   return `Hello ${name}! I'm ${age}`;
// };

// const res = getName("Alex", 20);
// console.log(res);

// ===================================

// const getName = (name, age = 5) => {};

// const res = getName(name, 20);
// console.log(res);

// =================================
// (function () {
//   console.log("object");
// })();

// ======================

// const calculate = function (a, b, char) {
//   switch (char) {
//     case "+":
//       return a + b;

//     case "-":
//       return a - b;

//     default:
//       return "Hello";
//   }
// };

// // const res = calculate(5, 10, "+");
// // console.log(`res`, res);
// const res = calculate(5, 10, "-");
// console.log(`res`, res);

// ======================
// const res = function () {
//   console.log(x);
//   return x;
//   var x = "Hello";
// };

// const message = res();
// console.log(message);

// ==================

// function fnA() {
//   console.log("Лог внуртри функции fnA до вызова fnB");//2
//   fnB();
//   console.log("Лог внуртри функции fnA после вызова fnB"); //4
// }

// function fnB() {
//   console.log("Лог внутри функции fnB"); //3
// }

// console.log("Лог перед вызовом fnA");//1
// fnA();
// console.log("Лог после вызова fnA"); //5

// =======================================

// const getNumber = function (num) {
//   console.log(`num:`, num); //num:2
//   const res = num + 1;
//   if (res === 10) return;
//   return getNumber(res);
// };

// getNumber(1);

// ===================================
// function getData() {
//   console.log("1");
//   return function () {
//     console.log("2");
//     return function (value) {
//       console.log(value);
//       return function () {
//         console.log("4");
//         return function () {
//           console.log("5");
//           return function () {
//             console.log("5");
//           };
//         };
//       };
//     };
//   };
// }

// getData()()("fsdfsdf")()()();

// const getValue = (a) => (b) => (c) => console.log(a + b + c);

// getValue(1)(2)(3);

// ==========================================

// function multiply() {
//   let total = 0;

//   console.log(arguments);

//   for (const argument of arguments) {
//     total += argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  10
// console.log(multiply(1, 2, 3, 4, 5)); //  15

// =============================================

// function multiply(...args) {
//   let total = 0;

//   const a = args.slice(0, 3);
//   console.log(`a`, a);

//   console.log(args);

//   for (const argument of args) {
//     total += argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 22, 22334, 565)); //  6

// ======================

// const arr = [1, 2, 3, 4, 5, 6];

// const [a, b, , d, e] = arr;

// console.log(`a`, a);
// console.log(`b`, b);
// console.log(`c`, c);

// ================================
