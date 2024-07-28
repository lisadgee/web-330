"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Lisa Gee
      Date:   7/16/24

      Filename: project12-03.js
*/

//Apply click method to article > h2 selector
$("article > h2").click( e => {
//Declare variables
   let heading = $(e.target);
   let list = $(heading).next();
   let headingImage = $(heading).children("img");
   //Hide/show content over half-second interval
   $(list).slideToggle(500);
   //Change symbol in headings and get value of src attribute.  If src equals plus.pg, change to minus.png
   if ($(headingImage).attr("src") === "plus.png") {
      $(headingImage).attr("src", "minus.png");
   } else {  //else set src to plus.png
      $(headingImage).attr("src", "plus.png");
   }
   

});