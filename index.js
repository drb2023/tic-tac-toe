// When we started this project I set up the HTML & CSS well before
// adding the JavaScript. I had already made my game table and my game
// marking solution so I wanted to focus on getting everything 
// functional with what I had rather than delete it and have the JavaScript 
// create it. This is why I have nine div's in my HTML representing my table.
// I understand creating the table in JavaScript is the preferred method & 
// I will likely change my code to reflect that, but I wanted to make sure I 
// turned in a solid, functional game first.


//----------- VARIABLES----------------//
const startButton = document.getElementsByClassName("start-game")[0];
let p1score = 0;
let p2score = 0;
let p1nameDisplay = document.getElementsByClassName("p1n")[0];
let p2nameDisplay = document.getElementsByClassName("p2n")[0];
let p1scoreDisplay = document.getElementsByClassName("p1s")[0];
let p2scoreDisplay = document.getElementsByClassName("p2s")[0];
let tableSlot = document.getElementsByClassName("table-slot");
let getName1 = null;
let getName2 = null;
const gameTable = document.getElementById("game-table");
const xMark = document.getElementsByClassName("xMark");
const oMark = document.getElementsByClassName("oMark");
let tL = document.getElementsByClassName("tl")[0];
let tM = document.getElementsByClassName("tm")[0];
let tR = document.getElementsByClassName("tr")[0];
let mL = document.getElementsByClassName("ml")[0];
let mM = document.getElementsByClassName("mm")[0];
let mR = document.getElementsByClassName("mr")[0];
let bL = document.getElementsByClassName("bl")[0];
let bM = document.getElementsByClassName("bm")[0];
let bR = document.getElementsByClassName("br")[0];
let nextGameButton = document.getElementsByClassName("next-game")[0];
clickCounter = 0;


// --------- PLAYER NAME ENTRY----------//
function startGame(){
    while (getName1 === null || !isNaN(getName1)){
        getName1 = prompt("Player 1 name?");
  
        if (getName1 === null || !isNaN(getName1)){
        alert("Invalid name, please try again");
        } else {
                p1nameDisplay.innerHTML = getName1;
            }
    }
    
    while (getName2 === null || !isNaN(getName2)){
        getName2 = prompt("Player 2 name?");
  
        if (getName2 === null || !isNaN(getName2)){
        alert("Invalid name, please try again");
        }else{
            p2nameDisplay.innerHTML = getName2;
            p1scoreDisplay.innerHTML = "Score: " + 0;
            p2scoreDisplay.innerHTML = "Score: " + 0;
            }
    }
    gameTable.style.visibility = "visible";-
    startButton.classList.add("start-game-hidden");
}
startButton.addEventListener("click", startGame);


// ----------RANDOM ROLL START-------------//
function randomStart(){
    const randomStartPlayer = Math.floor(Math.random(2) * 2);
        if (randomStartPlayer === 0){
            p1nameDisplay.classList.add("active-highlight")
        } else {
            p2nameDisplay.classList.add("active-highlight")
        }
}
randomStart();


// ---------GAME TABLE FUNCTIONS-----------//
gameTable.addEventListener("click", function(clickEvent) {

    if (clickEvent.target.classList.contains("xMark") || clickEvent.target.classList.contains("oMark")){
        alert ("You can't put a mark there!! Try again...")
    }   else{
            if (p1nameDisplay.classList.contains("active-highlight")) {
            clickEvent.target.classList.add("xMark");
            p1nameDisplay.classList.remove("active-highlight")
            p2nameDisplay.classList.add("active-highlight")
            clickCounter++;
            }   else {
                clickEvent.target.classList.add("oMark");
                p2nameDisplay.classList.remove("active-highlight");
                p1nameDisplay.classList.add("active-highlight");
                clickCounter++
                }
    
        }
        console.log(clickCounter)    
});


// -------------------WIN OR DRAW-------------------//
gameTable.addEventListener("click", win);

function win(){
    if (tL.classList.contains("xMark") && tM.classList.contains("xMark") && tR.classList.contains("xMark")){ 
        p1nameDisplay.classList.add("winner");
        p1nameDisplay.innerHTML = getName1 + " " +" is the winner!";
        p1score++;
        p1scoreDisplay.innerHTML = "Score: " + p1score;
        nextGameButton.style.visibility = "visible"
        gameTable.style.visibility = "hidden";
    } else if (mL.classList.contains("xMark") && mM.classList.contains("xMark") && mR.classList.contains("xMark")){
        p1nameDisplay.classList.add("winner");
        p1nameDisplay.innerHTML = getName1 + " " +" is the winner!";
        p1score++;
        p1scoreDisplay.innerHTML = "Score: " + p1score;
        nextGameButton.style.visibility = "visible"
        gameTable.style.visibility = "hidden";
    } else if (bL.classList.contains("xMark") && bM.classList.contains("xMark") && bR.classList.contains("xMark")){
        p1nameDisplay.classList.add("winner");
        p1nameDisplay.innerHTML = getName1 + " " +" is the winner!";
        p1score++;
        p1scoreDisplay.innerHTML = "Score: " + p1score;
        nextGameButton.style.visibility = "visible"
        gameTable.style.visibility = "hidden";
    } else if (tL.classList.contains("xMark") && mL.classList.contains("xMark") && bL.classList.contains("xMark")){
        p1nameDisplay.classList.add("winner");
        p1nameDisplay.innerHTML = getName1 + " " +" is the winner!";
        p1score++;
        p1scoreDisplay.innerHTML = "Score: " + p1score;
        nextGameButton.style.visibility = "visible"
        gameTable.style.visibility = "hidden";
    } else if (tM.classList.contains("xMark") && mM.classList.contains("xMark") && bM.classList.contains("xMark")){
        p1nameDisplay.classList.add("winner");
        p1nameDisplay.innerHTML = getName1 + " " +" is the winner!";
        p1score++;
        p1scoreDisplay.innerHTML = "Score: " + p1score;
        nextGameButton.style.visibility = "visible"
        gameTable.style.visibility = "hidden";
    } else if (tR.classList.contains("xMark") && mR.classList.contains("xMark") && bR.classList.contains("xMark")){
        p1nameDisplay.classList.add("winner");        p1nameDisplay.innerHTML = getName1 + " " +" is the winner!";
        p1score++;
        p1scoreDisplay.innerHTML = "Score: " + p1score;
        nextGameButton.style.visibility = "visible"
        gameTable.style.visibility = "hidden";
    } else if (tL.classList.contains("xMark") && mM.classList.contains("xMark") && bR.classList.contains("xMark")){
        p1nameDisplay.classList.add("winner");
        p1nameDisplay.innerHTML = getName1 + " " +" is the winner!";
        p1score++;
        p1scoreDisplay.innerHTML = "Score: " + p1score;
        nextGameButton.style.visibility = "visible"
        gameTable.style.visibility = "hidden";
    } else if (tR.classList.contains("xMark") && mM.classList.contains("xMark") && bL.classList.contains("xMark")){
        p1nameDisplay.classList.add("winner");
        p1nameDisplay.innerHTML = getName1 + " " +" is the winner!";
        p1score++;
        p1scoreDisplay.innerHTML = "Score: " + p1score;
        nextGameButton.style.visibility = "visible"
        gameTable.style.visibility = "hidden";
    }

    if (tL.classList.contains("oMark") && tM.classList.contains("oMark") && tR.classList.contains("oMark")){ 
        p2nameDisplay.classList.add("winner");
        p2nameDisplay.innerHTML = getName2 + " " +" is the winner!";
        p2score++;
        p2scoreDisplay.innerHTML = "Score: " + p2score;
        nextGameButton.style.visibility = "visible"
        gameTable.style.visibility = "hidden";
    } else if (mL.classList.contains("oMark") && mM.classList.contains("oMark") && mR.classList.contains("oMark")){
        p2nameDisplay.classList.add("winner");
        p2nameDisplay.innerHTML = getName2 + " " +" is the winner!";
        p2score++;
        p2scoreDisplay.innerHTML = "Score: " + p2score;
        nextGameButton.style.visibility = "visible"
        gameTable.style.visibility = "hidden";
    } else if (bL.classList.contains("oMark") && bM.classList.contains("oMark") && bR.classList.contains("oMark")){
        p2nameDisplay.classList.add("winner");
        p2nameDisplay.innerHTML = getName2 + " " +" is the winner!";
        p2score++;
        p2scoreDisplay.innerHTML = "Score: " + p2score;
        nextGameButton.style.visibility = "visible"
        gameTable.style.visibility = "hidden";
    } else if (tL.classList.contains("oMark") && mL.classList.contains("oMark") && bL.classList.contains("oMark")){
        p2nameDisplay.classList.add("winner");
        p2nameDisplay.innerHTML = getName2 + " " +" is the winner!";
        p2score++;
        p2scoreDisplay.innerHTML = "Score: " + p2score;
        nextGameButton.style.visibility = "visible"
        gameTable.style.visibility = "hidden";
    } else if (tM.classList.contains("oMark") && mM.classList.contains("oMark") && bM.classList.contains("oMark")){
        p2nameDisplay.classList.add("winner");
        p2nameDisplay.innerHTML = getName2 + " " +" is the winner!";
        p2score++;
        p2scoreDisplay.innerHTML = "Score: " + p2score;
        nextGameButton.style.visibility = "visible"
        gameTable.style.visibility = "hidden";
    } else if (tR.classList.contains("oMark") && mR.classList.contains("oMark") && bR.classList.contains("oMark")){
        p2nameDisplay.classList.add("winner");
        p2nameDisplay.innerHTML = getName2 + " " +" is the winner!";
        p2score++;
        p2scoreDisplay.innerHTML = "Score: " + p2score;
        nextGameButton.style.visibility = "visible"
        gameTable.style.visibility = "hidden";
    } else if (tL.classList.contains("oMark") && mM.classList.contains("oMark") && bR.classList.contains("oMark")){
        p2nameDisplay.classList.add("winner");
        p2nameDisplay.innerHTML = getName2 + " " +" is the winner!";
        p2score++;
        p2scoreDisplay.innerHTML = "Score: " + p2score;
        nextGameButton.style.visibility = "visible"
        gameTable.style.visibility = "hidden";
    } else if (tR.classList.contains("oMark") && mM.classList.contains("oMark") && bL.classList.contains("oMark")){
        p2nameDisplay.classList.add("winner");
        p2nameDisplay.innerHTML = getName2 + " " +" is the winner!";
        p2score++;
        p2scoreDisplay.innerHTML = "Score: " + p2score;
        nextGameButton.style.visibility = "visible"
        gameTable.style.visibility = "hidden";
    } else if (clickCounter === 9 && !p2nameDisplay.classList.contains("winner") && !p1nameDisplay.classList.contains("winner")){
        function drawGame(){
            p1nameDisplay.innerHTML = "Cat's Game";
            p2nameDisplay.innerHTML = " Try Again!";
            nextGameButton.style.visibility = "visible"
            gameTable.style.visibility = "hidden";
            drawClear();
        }
        drawGame();

        function drawClear(){
            if (!p1nameDisplay.classList.contains("active-highlight")){
                p1nameDisplay.classList.add("active-highlight");
            } else if (!p2nameDisplay.classList.contains("active-highlight")){
                p2nameDisplay.classList.add("active-highlight");
            }
        }
        drawClear();
    }
}


// ---------------NEXT GAME-----------------//
nextGameButton.addEventListener("click", nextGame);

function nextGame (){
    clickCounter = 0;
    nextGameButton.style.visibility = "hidden";
    p1nameDisplay.classList.remove("winner");
    p2nameDisplay.classList.remove("winner");
    p1nameDisplay.classList.remove("active-highlight");
    p2nameDisplay.classList.remove("active-highlight");    
    p1nameDisplay.innerHTML = getName1;
    p2nameDisplay.innerHTML = getName2;
    gameTable.style.visibility = "visible";
    function removeTag(){
        const xElements = document.querySelectorAll('.xMark');
        const oElements = document.querySelectorAll('.oMark');
        xElements.forEach((element) => {element.classList.remove('xMark')});
        oElements.forEach((element) => {element.classList.remove('oMark')});        
    }
    removeTag();
    randomStart();
}
