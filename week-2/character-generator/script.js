/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Lisa Gee
  Date: June 4, 2024
  Filename:  script
*/

"use strict";
//Creates character with 3 parameters
function createCharacter(name, gender, characterClass) {
  //Declare private variables and set in body of function
  //Return an object with functions that expose the character variables  
  return {
    getName: function() {
      return name;
    },

    getGender: function() {
      return gender;
    },

    getClass: function() {
      return characterClass;
    }
  }
}

//Event listener for button
document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault(); //override browser code

  // Get form values
  let heroName = document.getElementById("heroName").value;
  let heroGender = document.getElementById("heroGender").value;
  let heroClass = document.getElementById("heroClass").value;
  
  //Create character
  let character = createCharacter (heroName, heroGender, heroClass);

  //Display character information
  let outputName = document.getElementById("outputName");
  outputName.innerHTML = character.getName();  //use object to retrieve character values

  let outputGender = document.getElementById("outputGender");
  outputGender.innerHTML = character.getGender();

  let outputClass = document.getElementById("outputClass");
  outputClass.innerHTML = character.getClass();
});