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

// function calculateVolumeAndArea(x) {
//   if (typeof x !== "number" || x < 0 || !Number.isInteger(x)) {
//     return `При обчисленні сталась помилка`;
//   }
//                                             // Task 1 complete
//   let s = Math.pow(x, 2) * 6;
//   let v = Math.pow(x, 3);
//   return `Об'єм куба: ${v}, площа всієї поверхності: ${s}`;
// }
// calculateVolumeAndArea(5);

// function getCoupeNumber(x) {
// if(isNaN(x) || x < 0 || !(Number.isInteger(x))){
//    return `Ошибка. Проверьте правильность введенного номера места`;
// }else if(x === 0 || x > 36){
//    return `Таких мест в вагоне не существует`; // Task 2 coplete
// }else {
//    return Math.ceil(x/4);
// }

// }
// getCoupeNumber(5)

// function getTimeFromMinutes(x) {
//   if (isNaN(x) || x < 0 || !(Number.isInteger(x))) {
//     console.log(`Ошибка, проверьте данные`);
//   } else if ((x === 0, x <= 59)) {
//     let hours = Math.floor(x / 60);
//     let minutes = x % 60;
//     return `Это ${hours} часов и ${minutes} минут`;
//   } else if (x <= 119) {
//     let hours = Math.floor(x / 60);                     //Task 3 complete**
//     let minutes = x % 60;
//     return `Это ${hours} час и ${minutes} минут`;
//   } else if (x <= 299) {
//     let hours = Math.floor(x / 60);
//     let minutes = x % 60;
//     return `Это ${hours} часа и ${minutes} минут`;
//   } else if (x >= 300 || x <= 600) {
//     let hours = Math.floor(x / 60);
//     let minutes = x % 60;
//     return `Это ${hours} часов и ${minutes} минут`;
//   }
// }
// getTimeFromMinutes(600);


function findMaxNumber(a, b, c, d) {
let result = [a, b, c, d];
if (typeof result === 'string' && isNaN(result)) {
    console.log(0);
} else {
    console.log(Math.max(a, b, c, d));
}
    
}
findMaxNumber(4, 1, '5', 12);