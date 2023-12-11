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
// let num = 45;

// do {
//   console.log(num);
//   num++;
// }
// while (num <= 55);

// for (let i = 1; i <= 12; i++) {
//   if (i === 9) {
//     continue;
//   }
//   console.log(i);

// }
// for (let i = 0; i <= 3; i++) {
//   console.log(i);
//   for (let j = 0; j <= 3; j++) {
//     console.log(j);
//   }
// }

// let result = "";
// const length = 4;

//  first: for (let i = 1; i < length; i++) {
//   console.log(`First level: ${i}`);
//   for (let j = 0; j < i; j++) {
//     console.log(`Second level: ${j}`);
//     for (let x = 0; x < j; x++) {
//       if(x === 2) break first;
//       console.log(`Third level: ${x}`);
//     }
//   }

// }
// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//       continue;
//   } else {
//       console.log(i);
//   }
// }
// let i = 2;

// while (i <= 16) {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   } else {
//     console.log(i);
//   }
//   i++
// }

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
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) { // Умова рядок i має бути менше дорівнює 5
    for (let j = 0; j < lines - i; j++) { // Умова рядок j має бути меншим чим 5 - i
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)