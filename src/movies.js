// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let onlyDirectors = moviesArray.map((eachMovie) => {
    return eachMovie.director;
  });
  return onlyDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let filteredMovie = moviesArray.filter((eachDrama) => {
    if (
      movies.director === "Steven Spielberg" &&
      movies.genre.includes("Drama")
    ) {
      return true;
    } else {
      return false;
    }
  });
  return filteredMovie.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let totalScores = moviesArray.reduce((acc, elem) => {
    if (elem.score) {
      return acc + elem.score;
    } else {
      return acc;
    }
  }, 0);
  let avgScore = totalScores / moviesArray.length;
  let roundedScore = avgScore.toFixed(2);
  return Number(roundedScore);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((eachScore) => {
    if (movies.genre.includes("Drama")) {
      return true;
    }
    if (moviesArray.length === 0) {
      return 0;
    }
  });
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let cloneOrder = JSON.parse(JSON.stringify(moviesArray));
  cloneOrder.sort((elem1, elem2) => {
    if (elem1.year > elem2.year) {
      return 1;
    } else if (elem1.year < elem2.year) {
      return -1;
    } else {
      return elem1.title.localeCompare(elem2.title);
    }
  });
  return cloneOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let cloneAlpha = JSON.parse(JSON.stringify(moviesArray));
    cloneAlpha.sort((tittle1, tittle2)=>{
      if (tittle1.title>tittle2.title){
          return -1
      }
      else if(tittle1<tittle2){
          return 1
      }
      else{
          return 0
      }
    });
    return cloneAlpha.slice(0,20)
  
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
