/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Lisa Gee
  Date: 7/21/24
  Filename: script.js
*/

"use strict";

// Declaration for movie data
const movies = [
  {title:"Titanic",director:"James Cameron",year:"1997",synopsis:"Love and tragedy on the high seas!"},
  {title:"Star Wars",director:"George Lucas",year:"1977",synopsis:"Space opera at its best"},
  {title:"Airplane",director:"David Zucker",year:"1980",synopsis:"Silly hijinks in the blue skies"}
];


// Return a promise that retrieves the movie by title
function fetchMovie(movieTitle) {
  return new Promise((resolve, reject) => {
    let movie = movies.find(({title}) => title === movieTitle);
    resolve(movie);
  })
}

document.getElementById("movie-form").addEventListener("submit", async (event) => {

  event.preventDefault();
  let movieTitle = document.getElementById("title-input").value;
  // Await the promise to be resolved for fetching the movie data
  let movieObj = await fetchMovie(movieTitle);
  document.getElementById("movie-title").innerHTML = movieObj.title
  document.getElementById("movie-director").innerHTML = movieObj.director
  document.getElementById("movie-year").innerHTML = movieObj.year
  document.getElementById("movie-synopsis").innerHTML = movieObj.synopsis
});