"use srtict";
const numberOfFilms = +prompt("Яку кількість фільмів ви переглянули?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 1; i++) {
  const a = prompt("Один із останніх переглянутих фільмів", ""),
    b = prompt("На скільки його оціните?", "");

  if (
    a != null &&
    b != null &&
    a != "" &&
    b != "" &&
    a.length < 50 &&
    b.length < 50
  ) {
    personalMovieDB.movies[a] = b;
    console.log("Done");
  } else {
    console.log("Error");
    i--; 
  }
}
console.log(personalMovieDB);

if (personalMovieDB.count <= 10) {
  console.log('Переглянуто дуже мало фільмів!');
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
  console.log('Ви класичний глядач!');
} else if (personalMovieDB.count > 30){
  console.log('Ви кіноман!');
} else {
  console.log('Сталась помилка!');
};