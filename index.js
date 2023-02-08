
// ---- GAME BOARD TABLE ----
const gameBoardElement = document.getElementsByClassName("game-board")[0];

function makeRow(){
    const row = document.createElement("tr")
    for (let i = 0; i < 3; i++) {
        const td = document.createElement("td")
        row.appendChild(td)
    }
    gameBoardElement.appendChild(row)
}
makeRow()
makeRow()
makeRow()
// ----DONT FUCK WITH THIS----

// NAMES AND SCORES
let playerOne = document.getElementsByClassName("p1ns")[0];
let playerOneScore = document.getElementsByClassName("p1ns")[1];
let playerTwo = document.getElementsByClassName("p1ns")[2];
let playerTwoScore = document.getElementsByClassName("p1ns")[3];

//Prompt to enter p1 & p2 names.


gameBoardElement.addEventListener("click", stamp)
let chosenColor = red;

// function stamp(event){
//     const target = event.target
//         if (target.className === chosenColor) {
//             target.className = ""
//         } else {
//             target.className = chosenColor
//         }
// }


// const tableElement = document.getElementsByClassName("game-board")[0];

// tableElement.addEventListener("click", colorize)
// let chosenColor = "red"

// // tableElement.addEventListener("change", 

// function (event){
//     chosenColor = event.target.value
// }

// function colorize(event){
//     // if (event.target.TagName === "td"){
//         const target = event.target
//             if (target.className === chosenColor) {
//             target.className = ""
//             } else {
//             target.className = chosenColor
//         }
//     // }
// }

