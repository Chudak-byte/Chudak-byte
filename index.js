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
// getTimeFromMinutes(600);

// function strings(string) {
//   if (typeof string === "number") {
//     console.log(Math.round(num));
//   } else {
//     console.log(string.toUpperCase(string));
//   }
// }
// strings("Hello world");

// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",                                         //Lection 36
//   skills: {
//     languages: ["ru", "eng"],
//     js: "20%",
//     php: "10%",
//   },
//   exp: "1 month",
//   showAgeAndLangs: function (plan) {
//     const {age} = plan;
//     const {languages} = plan.skills;
//     let str = `Мені ${age} і я володію мовами:`

//     languages.forEach(lang => {
//         str += `${lang.toUpperCase()} `
//     });
//     console.log(str);
//   },
// };
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience(plan) {
//   const { exp } = plan.skills;
//   return exp;                           Task 1(19.01)
// }
// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {   Task 2(19.01)
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }

//     console.log(str);
// }

// showProgrammingLangs(personalPlanPeter);

// LECTION 37
//TASK 1
// const family = ['Artem' , 'Father'];
// function showFamily(arr) {
//     let str = '';
   
//     arr.length === 0 ? str = `Семья пуста` : str = `Семья состоит из: `;
//     arr.forEach(members => {
//         str += `${members} `;
//     });
//     console.log(str);
// }
// showFamily(family);
//TASK 2
// const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

// function standardizeStrings(arr) {
//   arr.forEach(city => {
//     console.log(city.toLowerCase());
//   });
  
// }
// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(str) {
       

//     console.log(str.split('').reverse().join(''));
// }
// reverse(someString);


// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     if (arr.length === 0) {
//         return 'Нет доступных валют'
//     }
//     const isDeletedCurrency=(currency) => missingCurr && currency === missingCurr;
//     const isCurrencyAvailable=(currency) => baseCurrencies.includes(currency) || additionalCurrencies.includes(currency);
//     const availableCurrencies=arr.filter((currency) => !isDeletedCurrency(currency) && isCurrencyAvailable(currency));
//     const result = 'Доступные валюты: \n' + availableCurrencies.join('\n');
    
//     return result; 

// }
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')