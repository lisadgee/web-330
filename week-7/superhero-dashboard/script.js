/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Lisa Gee
  Date: 7/14/24
  Filename: script.js
*/

"use strict";

let chefs = [
  // Chef object
  { 'name': 'Luigi', 'speciality': 'pasta', 'weakness': 'mario', 'location': 'haunted mansion' },
  { 'name': 'Mario', 'speciality': 'mushrooms', 'weakness': 'penelope', 'location': 'castle' },
  { 'name': 'Bowser', 'speciality': 'turtle soup', 'weakness': 'ego', 'location': 'dungeon' }
];

function fetchChef1() {
  // Implement function to get data for chef 1
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Fetching Chef 1');
      resolve('Chef 1 has been fetched');
    }, 2000);
  });
}

function fetchChef2() {
  // Implement function to get data for chef 2
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Fetching Chef 2');
      resolve('Chef 2 has been fetched');
    }, 3000);
  });
}

function fetchChef3() {
  // Implement function to get data for chef 3
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Fetching Chef 3');
      resolve('Chef 3 has been fetched');
    }, 1000);
  });
}

//Use Promise.allSettled to fetch all heroes and update the webpage
Promise.allSettled([fetchChef1(), fetchChef2(), fetchChef3()]).then((results) => {
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      console.log(result.value);
    } else {
      console.log('An error occurred: ', result.reason);
    }
  });

  //Display data for Chef 1
  document.getElementById("chef1").firstChild.textContent = chefs[0].name;
  document.getElementById("chef1").firstChild.nextSibling.textContent = chefs[0].speciality;
  document.getElementById("chef1").firstChild.nextSibling.nextSibling.textContent = chefs[0].weakness;
  document.getElementById("chef1").firstChild.nextSibling.nextSibling.nextSibling.textContent = chefs[0].location;
  
  //Display data for Chef 3
  document.getElementById("chef2").firstChild.textContent = chefs[1].name;
  document.getElementById("chef2").firstChild.nextSibling.textContent = chefs[1].speciality;
  document.getElementById("chef2").firstChild.nextSibling.nextSibling.textContent = chefs[1].weakness;
  document.getElementById("chef2").firstChild.nextSibling.nextSibling.nextSibling.textContent = chefs[1].location;
  
  //Display data for Chef 3
  document.getElementById("chef3").firstChild.textContent = chefs[2].name;
  document.getElementById("chef3").firstChild.nextSibling.textContent = chefs[2].speciality;
  document.getElementById("chef3").firstChild.nextSibling.nextSibling.textContent = chefs[2].weakness;
  document.getElementById("chef3").firstChild.nextSibling.nextSibling.nextSibling.textContent = chefs[2].location;
  
});