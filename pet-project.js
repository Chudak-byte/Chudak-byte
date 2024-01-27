"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: () => {
    personalMovieDB.count = +prompt(
      "Яку кількість фільмів ви переглянули?",
      ""
    );

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt(
        "Яку кількість фільмів ви переглянули?",
        ""
      );
    }
  },
  rememberMyFilms: () => {
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
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count <= 10) {
      console.log("Переглянуто дуже мало фільмів!");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
      console.log("Ви класичний глядач!");
    } else if (personalMovieDB.count > 30) {
      console.log("Ви кіноман!");
    } else {
      console.log("Сталась помилка!");
    }
  },
  showMyDB: (hidden) => {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: () => {
    personalMovieDB.private
      ? (personalMovieDB.private = false)
      : (personalMovieDB.private = true);
  },
  writeYourGenres: () => {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt("Ваш улюблений жанр під номером ${i}");

      if (genre === "" || genre == null) {
        console.log(`Вы ввели некорректные данные`);
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
       }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Улюблений жанр: ${i + 1} - це ${item}`); 
    })

  },
};
