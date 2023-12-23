// "use strict";

// const numberOfFilms = +prompt("Яку кількість фільмів ви переглянули?", "");
// const personalMovieDB = {
// count: numberOfFilms,
// movies: {},
// actors: {},
// genres: [],
// private: false,
// };

// const a = prompt("Один із останніх переглянутих фільмів", ""),
//   b = prompt("На скільки його оціните?", ""),
//   c = prompt("Один із останніх переглянутих фільмів", ""),
//   d = prompt("На скільки його оціните?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);
// const num = 50;

// switch (num) {
//   case 120:
//     console.log("bad");
//     break;
//   case 51:
//     console.log("good");
//     break;
//   default:
//     console.log("null");
//     break;
// }
// Зробити
// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";

//   }

//   result += "\n";

// }
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for(let i = 0; i < data.length; i++){
//         if (typeof(data[i]) === "number") {
//             data[i] = data[i] * 2;
//         } else if(typeof(data[i]) === "string") {
//             data[i] = `${data[i]} - done`;
//         }
//     }
//     console.log(data);

//     // Не трогаем
//     return data;

// const eurCurr = 42;
// const usdCurr = 36;

// const convertUsd = (amountUsd, curr) => {
//   console.log(amountUsd * curr);
// }

// const convertEur = (amountEur, curr) => {
//   console.log(amountEur * curr);
// }
// convertUsd(4300, usdCurr);
// convertEur(5200, eurCurr);

// function returnNeighboringNumbers(number) {
//   if (number) {
//                 console.log([number - 1, number, number + 1]);

//       }
//   }

//  returnNeighboringNumbers(5);
// const getMathResult = (base, length) =>
//   typeof length !== "number"
//     ? base
//     : length <= 0
//     ? base
//     : Array.from({ length }, (_, index) => base * (index + 1)).join("---");
//     console.log(getMathResult(5, 8));


// const str = "test";
// const arr = [5, 6, 8];
// console.log(str.toUpperCase());
// console.log(str);

// const fruits = "Some fruit";
// console.log(fruits.indexOf("i"));


// const logg = "hello world";
// console.log(logg.substr(1, 7));

// const nume = ('12.6px'); 
//   console.log(parseInt(nume))


// console.log(Math.round(num));


// function num(number) {
//   if (typeof number === "number") {
//     console.log(Math.round(number));
//   } else {
//     console.log(parseInt(number));
//   }
// }
// num('15.6px');



// function strings(string) {
//   if (typeof string === "number") {
//     console.log(Math.round(num));
//   } else {
//     console.log(string.toUpperCase(string));
//   }
// }
<<<<<<< HEAD

// const arrayOfNumbers = [];
//   for (let i = 5; i <= 10; i++) {
//     console.log(i);
//     var total = arrayOfNumbers.push(i);
//   }
// return arrayOfNumbers
// const arr = [3, 5, 8, 16, 20, 23, 50];
//   const result = [];

//   for(let i = 0; i < arr.length; i++){
//     result[i] = arr[i];
//   }
// console.log(result);

//   // Не трогаем
//   return result;

//   for (let i = 0; i <= 6; i++) {  //Самий скорочений варіант
//     console.log('*'.repeat(i));
// };

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// const reversed = data.reverse();
// for(let i = 0; i < data.length; i++){
//   result[i] = reversed[i];
// }

// console.log(result);
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) { // Умова рядок i має бути менше дорівнює 5
//     for (let j = 0; j < lines - i; j++) { // Умова рядок j має бути меншим чим 5 - i
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)
// console.log("hello world");

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(5, 8));
// console.log(calc(4, 6));
// console.log(calc(1, 9));

// const calc = (a, b) => {

//   return a + b;
// };
// console.log(calc(4, 7));
// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//   return curr * amount;
// }
// function promotion(result) {
//   console.log(result * discount);
// }

// promotion(convert(500, usdCurr), discount);
function sayHello(name) {
return name;
}
sayHello("Hello Artem");
=======
// strings("Hello world");
>>>>>>> 0e462d50237b5762d66dd019c96f0ffa41c04727
