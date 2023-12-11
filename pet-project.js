<<<<<<< HEAD
"use srtict";
const numberOfFilms = +prompt("Яку кількість фільмів ви переглянули?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [1],
  private: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один із останніх переглянутих фільмів", ""),
    b = prompt("На скільки його оціните?", "");

  personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);
=======
"use srtict";
const numberOfFilms = +prompt("Яку кількість фільмів ви переглянули?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [1],
  private: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один із останніх переглянутих фільмів", ""),
    b = prompt("На скільки його оціните?", "");

  personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);
>>>>>>> 9b93f797e936e40e1879b1d1ba9b0470383a8be2
console.log("hello world");