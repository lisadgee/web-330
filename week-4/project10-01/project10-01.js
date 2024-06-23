"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: Lisa Gee
      Date:  6/20/24 

      Filename: project10-01.js
*/

/// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48 ; i++) {
   intList[i] = i+1;
}
intList.sort(function() {
   return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
   let piece = document.createElement("img");
   piece.src = "piece" + intList[i] + ".png";
   let rowNum = Math.ceil((i+1)/8);
   let colNum = (i + 1) - (rowNum - 1)*8;
   piece.style.top = (rowNum - 1)*98 + 7 + "px";
   piece.style.left = (colNum - 1)*98 + 7 + "px";
   piece.draggable = false; // override the default draggability of images
   puzzleBoard.appendChild(piece);      
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");

/*Iterate through each item in pieces node list.
  For each item, add an event lister that executes grabPiece function
  when pointerdown event occurs.

*/
for (let items of pieces) {
   items.addEventListener("pointerdown", grabPiece);
}

//grabPiece function
function grabPiece(e) {
/*set value of pointerX and pointerY variables to values of clientX and ClientY properties of event object */
   pointerX = e.clientX;  
   pointerY = e.clientY;
   e.target.style.touchAction = "none";  //Set value of touchAction style for event target to none.    
   zCounter++; //Increase zCounter by 1
   e.target.style.zIndex = zCounter;   //Assign value of zCounter to zIndex style of event target.
/* pieceX and pieceY variables to the values of the offsetLeft and offsetTop
   properties of event target */
   pieceX = e.target.offsetLeft;
   pieceY = e.target.offsetTop;
/*Add event lister to event target that executes movePiece function in response when pointermove is used.
  Add event lister to event target that executes dropPiece function in response to pointerup method  */
   e.target.addEventListener("pointermove", movePiece);
   e.target.addEventListener("pointerup", dropPiece);
} 

//movePiece function.  
function movePiece(e) {
  /*Declare diffX and diffY variable to equal differences between e.clientX and pointerX.
    Declare diffX and diffY variable to equal differences between e.clientY and pointerY.*/
   let diffX = e.clientX - pointerX;  
   let diffY = e.clientY - pointerY;
  /*Set value of left style of event target to sum of pieceX and diffX plus text string 'px'.  
   Set value of top style of event target to sum of pieceY and diffY plus text string 'px'.*/
   e.target.style.left = pieceX + diffX + "px";
   e.target.style.top = pieceY + diffY + "px";
} 

//dropPiece function
/*Remove movePiece function from event listener for pointermove event and dropPiece
 function from event listener for pointerup event.*/
function dropPiece(e) {
   e.target.removeEventListener("pointermove", movePiece);
   e.target.removeEventListener("pointerup", dropPiece);
}
