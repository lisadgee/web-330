"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Lisa Gee
      Date:  6/2/24 

      Filename: project08-01.js
*/


/*--------------- Object Code --------------------*/
//constructor function for timer object with 2 parameters and set properties
function timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

//Add runPause method to timer object class prototype with 3 parameters
timer.prototype.runPause = function(timer, minBox, secBox) {
  if (timer.timeID) {                    //test if timer.timeID has a value
     window.clearInterval(timer.timeID); //pause timer using parameters
     timer.timeID = null;                //set to null
  } else {
     timer.timeID = window.setInterval(countdown, 1000); //run window.setInterval method - run countdown function every 1000 
  }
  
  //countdown function
  function countdown() {
     if (timer.seconds > 0) {  //if timer.seconds greater than 0
        timer.seconds--;       //decrease timer.seconds by 1
     } else if (timer.minutes > 0) { //if timer.minutes greater than 0
      timer.minutes--;  // decrease timer.minutes by 1  
      timer.seconds = 59;  //set value of timer.seconds to 59
        
     } else {
        window.clearInterval(timer.timeID);  //run with timer.timeID as parameter
        timer.timeID = null;  //set to null
     }

     minBox.value = timer.minutes;
     secBox.value = timer.seconds;
  } 
  
}

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

//Declare instance of timer object called myTimer w/parameters
let myTimer = new timer(minBox.value, secBox.value);

//onchange event handler for minBox that sets myTimer.minutes to minBox.value
minBox.onchange = function() {
  myTimer.minutes = minBox.value;
}

//onchange event handler for secBox that sets myTimer.seconds to secBox.value
secBox.onchange = function() {
  myTimer.seconds = secBox.value;
}

//onclick event handler for runPauseTimer button to run for anonymous function
runPauseTimer.onclick = function() {
  myTimer.runPause(myTimer, minBox, secBox);  //apply runPause method to myTimer using parameters
}
