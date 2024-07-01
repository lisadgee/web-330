/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author:
  Date:
  Filename:
*/

/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Lisa Gee
  Date: Jun 30, 2024
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  {
    tableNumber: 1,
    capacity: 4,
    isReserved: false
  },
  {
    tableNumber: 2,
    capacity: 6,
    isReserved: false
  },
  {
    tableNumber: 3,
    capacity: 2,
    isReserved: false
  },
  {
    tableNumber: 4,
    capacity: 4,
    isReserved: false
  }
];

// Function for reserveTable
function reserveTable(tableNum, callback, time) {

  //Find the requested table in the tebles object
  let requestedTable = tables.find(({ tableNumber }) => tableNumber == tableNum);
  if (requestedTable.isReserved) {
    //Display the message
    let message = document.getElementById("message");
    message.innerHTML = "Sorry, this table is already reserved"
  } else {

    //set the timeout and invoke the callback
    setTimeout(() => {
      callback(tableNum);
    }, time)
  }
}

//Callback for checking availibility
function makeReservation(tableNum) {

  //Find the requested table in the tebles object
  let requestedTable = tables.find(({ tableNumber }) => tableNumber == tableNum);

  //Set the requested table reervation value to true
  requestedTable.isReserved = true;

  //Display the message
  let message = document.getElementById("message");
  message.innerHTML = "The reservation has been made"
}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    // Prevent default behavior
    e.preventDefault();

    //Clear the message display
    let message = document.getElementById("message");
    message.innerHTML = ""

    //Retrieve the table number from the html form
    let tableNum = document.getElementById("tableNumber").value;

    //Call the reserve table function in response to the form submit event
    reserveTable(tableNum, makeReservation, 3000);
  });
