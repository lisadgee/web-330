"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Lisa Gee
      Date: July 4, 2024  

      Filename: project11-02.js
*/
//Declare variables
let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");
//anonymous function to 
postalCode.onblur = function() {
  //Declare variables and set their values
  let codeValue = postalCode.value;
  let countryValue = country.value;
  //Set value of place and region to empty strings
  place.value = "";
  region.value = "";
  
  /*
Fetch API to retrieve data from the Zippopotam API, 
and pass to countryValue and codeValue variables*/
   fetch(`https://api.zippopotam.us/${countryValue}/${codeValue}`)
    .then(response => response.json())  //return response and convert to JSON object
    .then(json => {
      place.value = json.places[0]["place name"]; //pull place name
      region.value = json.places[0]["state abbreviation"];//pull state abbreviation
    })
    //Prints error msg if response is rejected
    .catch(error => console.log(error));
}



