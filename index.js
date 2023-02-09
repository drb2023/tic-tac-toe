// ---------GRADING RUBRIC-------------//
// As users playing a two player game we want to:
    // enter our names and have them displayed - DONE
    // have our order chosen for us by the game - DONE
    // take turns placing our marks in empty spaces -DONE
    // not be able to place our marks in an occupied space - DONE
    // be told when a move causes a player to win, or to draw
    // start the game over without having to reset the browser
// As a user playing a one player game I want to:
    // see the name 'Computer' displayed as my opponent
    // have the Computer player make moves as if it were a human player with the correct mark in an empty space
// As a user playing a single player game I would be delighted to:
    // have the Computer make 'better-than-guessing' choices when placing a mark on the board
    // set the board size myself ("wider" or "taller" than 3x3)
// ADDITIONAL
    // change appropriate score box when game is won

//----------- VARIABLES----------------//
let startButton = document.getElementsByClassName("start-game")[0];
let p1score = 0;
let p2score = 0;
let p1nameDisplay = document.getElementsByClassName("p1n")[0];
let p2nameDisplay = document.getElementsByClassName("p2n")[0];
let p1scoreDisplay = document.getElementsByClassName("p1s")[0];
let p2scoreDisplay = document.getElementsByClassName("p2s")[0];
const tableSlot = document.getElementsByClassName("table-slot");
// --------- PLAYER NAME ENTRY----------//
var getName1 = null;

function startGame(){
    while (getName1 === null || !isNaN(getName1)){
        getName1 = prompt("What is the name of Player 1?");
  
        if (getName1 === null || !isNaN(getName1)){
        alert("Invalid name, please try again");
        }else{
            p1nameDisplay.innerHTML = getName1;
            }
    }
    var getName2 = null;
    while (getName2 === null || !isNaN(getName2)){
        getName2 = prompt("What is the name of Player 2?");
  
        if (getName2 === null || !isNaN(getName2)){
        alert("Invalid name, please try again");
        }else{
            p2nameDisplay.innerHTML = getName2;
            p1scoreDisplay.innerHTML = "Score: " + 0;
            p2scoreDisplay.innerHTML = "Score: " + 0;
            }
    }
    gameTable.style.visibility = "visible";
    startButton.classList.add("start-game-hidden");
}
startButton.addEventListener("click", startGame);
// ----------RANDOM ROLL START-----------------//
const randomStartPlayer = Math.floor(Math.random(2) * 2);

    if (randomStartPlayer === 0){
        p1nameDisplay.classList.add("active-highlight")
    } else {
        p2nameDisplay.classList.add("active-highlight")
    }
// ---------GAME TABLE---------------------------//

const gameTable = document.getElementById("game-table");
const xMark = document.getElementsByClassName("xMark")
const oMark = document.getElementsByClassName("oMark")

gameTable.addEventListener("click", function(clickEvent) {

    if (clickEvent.target.classList.contains("xMark") || clickEvent.target.classList.contains("oMark")){
        alert ("You can't put a mark there!! Try again...")
    } else{
    
        if (p1nameDisplay.classList.contains("active-highlight")) {
           clickEvent.target.classList.add("xMark");
           p1nameDisplay.classList.remove("active-highlight")
           p2nameDisplay.classList.add("active-highlight")
        } else {
            clickEvent.target.classList.add("oMark");
            p2nameDisplay.classList.remove("active-highlight");
            p1nameDisplay.classList.add("active-highlight")
        }
        
    }
});



// score++;
// scoreDisplay.innerText = score;