"use strict";

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
// strings("Hello world");
