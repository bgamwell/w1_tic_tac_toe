// wait for the DOM to finish loading

window.addEventListener("DOMContentLoaded", function() {

//  Variables

  var allBoxes = document.querySelectorAll(".box");

  var resetButton = document.querySelector(".btn");

  var headline = document.getElementById("headline");

  var playerXScorecard = document.getElementById("playerxscorecard");

  var playerYScorecard = document.getElementById("playeryscorecard");

  var playerTurn = "X";

  var playerXScore = 0;

  var playerYScore = 0;

  // Reset Button

  var resetBoard = resetButton.onclick = function(event){
    for (i = 0; i < allBoxes.length; i++) {
        allBoxes[i].style.backgroundColor = "white";
        allBoxes[i].innerText = "";
      };
      playerTurn = "X";
      console.log(playerTurn);
  };

  function checkForChampion() {
    if (playerXScore === 3) {
      alert("X wins three times! Congrats, you're the champion!");
      window.location.reload();
    } else if (playerYScore === 3) {
      alert("O wins three times! Congrats, you're the champion!");
      window.location.reload();
    };
  };

  // Pick Winner

  function checkForWinner() {
    if ( row1col1.innerText === "X" && row1col2.innerText === "X" && row1col3.innerText === "X" || row2col1.innerText === "X" && row2col2.innerText === "X" && row2col3.innerText === "X" || row3col1.innerText === "X" && row3col2.innerText === "X" && row3col3.innerText === "X" || row1col1.innerText === "X" && row2col1.innerText === "X" && row3col1.innerText === "X" || row2col1.innerText === "X" && row2col2.innerText === "X" && row2col3.innerText === "X" || row3col1.innerText === "X" && row3col2.innerText === "X" && row3col3.innerText === "X" || row1col1.innerText === "X" && row2col2.innerText === "X" && row3col3.innerText === "X" || row1col3.innerText === "X" && row2col2.innerText === "X" && row3col1.innerText == "X" )  {
    alert("X wins this round!");
    playerXScore++;
    playerXScorecard.innerText = playerXScore.toString();
    checkForChampion();
    resetBoard();
    } else if (row1col1.innerText === "O" && row1col2.innerText === "O" && row1col3.innerText === "O" || row2col1.innerText === "O" && row2col2.innerText === "O" && row2col3.innerText === "O" || row3col1.innerText === "O" && row3col2.innerText === "O" && row3col3.innerText === "O" || row1col1.innerText === "O" && row2col1.innerText === "O" && row3col1.innerText === "O" || row2col1.innerText === "O" && row2col2.innerText === "O" && row2col3.innerText === "O" || row3col1.innerText === "O" && row3col2.innerText === "O" && row3col3.innerText === "O" || row1col1.innerText === "O" && row2col2.innerText === "O" && row3col3.innerText === "O" || row1col3.innerText === "O" && row2col2.innerText === "O" && row3col1.innerText == "O" ) {
    alert("O wins this round!")
    playerYScore++;
    playerYScorecard.innerText = playerYScore.toString();
    checkForChampion();
    resetBoard();
    } else {
      switchTurn();
    };
  };

  function switchTurn() {
    if (playerTurn === "X") {
      playerTurn = "O";
    } else {
      playerTurn = "X";
    };
  };

// Adds an event listener to all boxes

  for (i = 0; i < allBoxes.length; i++) {
    allBoxes[i].onclick = function(event) {
      if (this.innerText === "") {
        if (playerTurn === "X") {
          this.style.backgroundColor = "green";
          this.innerText = playerTurn;
          checkForWinner();
        } else {
          this.style.backgroundColor = "yellow";
          this.innerText = playerTurn;
          checkForWinner();
        };
      } else {
        alert("This square has already been played!")
      };
    };
  };

}); //close window event listener
