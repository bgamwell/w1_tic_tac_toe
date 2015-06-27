// wait for the DOM to finish loading
window.addEventListener("DOMContentLoaded", function() {

  alert("Your javascript works!");

  //Variables

  var row1col1 = document.getElementById("row1col1");
  var row1col2 = document.getElementById("row1col2");
  var row1col3 = document.getElementById("row1col3");
  var row2col1 = document.getElementById("row2col1");
  var row2col2 = document.getElementById("row2col2");
  var row2col3 = document.getElementById("row2col3");
  var row3col1 = document.getElementById("row3col1");
  var row3col2 = document.getElementById("row3col2");
  var row3col3 = document.getElementById("row3col3");

  var allBoxes = document.querySelectorAll(".box");

  var resetButton = document.querySelector(".btn");

  //Functions

  var playerTurn == "x";

  if (playerTurn == "x") {


  }

  resetButton.onclick = function(event){
    for (i = 0; i < allBoxes.length; i++) {
        allBoxes[i].style.backgroundColor = "white";
      }
  };

  row1col1.onclick = function(event){
    row1col1.style.backgroundColor = "green";
  };

  row1col1.ondblclick = function(event){
    row1col1.style.backgroundColor = "yellow";
  };

  row1col2.onclick = function(event){
    row1col2.style.backgroundColor = "green";
  };

  row1col2.ondblclick = function(event){
    row1col2.style.backgroundColor = "yellow";
  };

  row1col3.onclick = function(event){
    row1col3.style.backgroundColor = "green";
  };

  row1col3.ondblclick = function(event){
    row1col3.style.backgroundColor = "yellow";
  };

  row2col1.onclick = function(event){
    row2col1.style.backgroundColor = "green";
  };

  row2col1.ondblclick = function(event){
    row2col1.style.backgroundColor = "yellow";
  };

  row2col2.onclick = function(event){
    row2col2.style.backgroundColor = "green";
  };

  row2col2.ondblclick = function(event){
    row2col2.style.backgroundColor = "yellow";
  };

  row2col3.onclick = function(event){
    row2col3.style.backgroundColor = "green";
  };

  row2col3.ondblclick = function(event){
    row2col3.style.backgroundColor = "yellow";
  };

  row3col1.onclick = function(event){
    row3col1.style.backgroundColor = "green";
  };

  row3col1.ondblclick = function(event){
    row3col1.style.backgroundColor = "yellow";
  };

  row3col2.onclick = function(event){
    row3col2.style.backgroundColor = "green";
  };

  row3col2.ondblclick = function(event){
    row3col2.style.backgroundColor = "yellow";
  };

  row3col3.onclick = function(event){
    row3col3.style.backgroundColor = "green";
  };

  row3col3.ondblclick = function(event){
    row3col3.style.backgroundColor = "yellow";
  };



  // document.addEventListener("click", function() {
  //   row1col1.style.backgroundColor = "green";
  // });

  //
  // document.addEventListener("click", function() {
  //   for (i = 0; i < allBoxes.length; i++) {
  //   allBoxes[i].style.backgroundColor = "white";
  //   }
  // });






}); //close window event listener
