"use srtict";
const numberOfFilms = +prompt("Яку кількість фільмів ви переглянули?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один із останніх переглянутих фільмів", ""),
        b = prompt("На скільки його оціните?", "");

        personalMovieDB.movies[a] = b;
}
console.log(personalMovieDB);
