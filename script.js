const gameButtons = document.querySelectorAll(".game-buttons");
const playButton = document.querySelector("#pick-button");
const rockButton = gameButtons[0];
const paperButton = gameButtons[1];
const scissorButton = gameButtons[2];

const game = ["rock","paper","scissor"];

function gameWorking(gameWork){
if (gameWork == true){
    playButton.enabled=true;
}
else playButton.disabled=true;
}


playerSelection();

// function to select and print player
function playerSelection(){
rockButton.addEventListener("click", () => {
    playerTurn = 0;
    pcTurn = Math.floor(Math.random() * 3);
    printTurns(playerTurn,pcTurn);

})
paperButton.addEventListener("click", () => {
    playerTurn = 1;
    pcTurn = Math.floor(Math.random() * 3);
    printTurns(playerTurn,pcTurn);

})
scissorButton.addEventListener("click", () => {
    playerTurn = 2;
    pcTurn = Math.floor(Math.random() * 3);
    printTurns(playerTurn,pcTurn);

})
}

function printTurns(playerTurn){
    console.log("Player pressed",game[playerTurn]);
    console.log("PC Pressed",game[pcTurn]);
}

// ----------- // ----

//GAME - LOGIC 

function gameWinner(playerTurn,pcTurn){
    if (playerTurn == pcTurn){
        whoWinner = 3;
        printWinner(whoWinner);

    }
    else if (playerTurn == 0 && pcTurn == 2 ){
         whoWinner=playerTurn;
         printWinner(whoWinner);

    }
    else if (playerTurn == 2 && pcTurn == 1 ){
         whoWinner=playerTurn;
         printWinner(whoWinner);

    }
    else if (playerTurn == 1 && pcTurn == 0 ){
         whoWinner=playerTurn;
         printWinner(whoWinner);

    }
    else if (playerTurn == 2 && pcTurn == 0 ){
         whoWinner=pcTurn;
         printWinner(whoWinner);

    }
    else if (playerTurn == 1 && pcTurn == 2 ){
         whoWinner=pcTurn;
         printWinner(whoWinner);

    }
    else if (playerTurn == 0 && pcTurn == 1 ){
         whoWinner=pcTurn;
         printWinner(whoWinner,playerCount,pcCount);
    }
}

//textbox :
const textBox = document.querySelector("#text-box");

function printWinner(whoWinner){
    if (whoWinner == 3){
        console.log("tie, Both chose ",game[playerTurn]);
        textBox.innerText=`Tie , Both = ${game[playerTurn]}`;
    }
    else if (whoWinner == playerTurn){
        console.log("Player Won, he chose ",game[whoWinner]);
        textBox.innerText=`Player won,   player = ${game[whoWinner]}, PC = ${game[pcTurn]}`;
        counting();
    }
    else if (whoWinner == pcTurn){
        console.log("PC Won, he chose ",game[whoWinner]);
        textBox.innerText=`PC won,   PC = ${game[whoWinner]}, Player = ${game[playerTurn]}`;
        counting();
    }
}

//PLay Button
playButton.addEventListener("click", ()=> {
    gameWinner(playerTurn,pcTurn);
})

// Counting : 

const playerScore = document.querySelector("#player-box");
const pcScore = document.querySelector("#pc-box")

let playerCount = 0;
let pcCount = 0;


function counting(){
    if (whoWinner === playerTurn) {
        playerCount = playerCount+1;
        
    }
    else if(whoWinner === pcTurn) {
        pcCount = pcCount+1;
      
    }

    playerScore.innerText=playerCount;
    pcScore.innerText=pcCount;
}


//new button 
const newGame = document.querySelector("#new-button");
newGame.addEventListener("click", () => {
    reset();
})

function reset() {
    playerCount = 0;
    pcCount = 0;
    playerScore.innerText = "";
    pcScore.innerText = "";
    textBox.innerText = "";

}