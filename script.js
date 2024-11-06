const choices = ["rock","paper","scissor"];
const PlayerchoiceDisplay = document.getElementById("Playerchoice");
const ComputerchoiceDisplay = document.getElementById("Computerchoice");
const PlayerscoreDisplay = document.getElementById("PlayerScore");
const ComputerScoreDisplay= document.getElementById("ComputerScore");
const resultDisplay = document.getElementById("result");
let playerScore = 0;
let computerScore = 0;

function startGame(Playerchoice){
    const Computerchoice =choices[ Math.floor(Math.random()*3)];
    let result = "";
    if(Playerchoice===Computerchoice){
        result = "IT'S A TIE!";

    }
    else{
        switch(Playerchoice){
            case "rock":
            result = (Computerchoice==="scissor")?"YOU WIN!" : "YOU LOOSE!";
            break;
            case "paper":
            result = (Computerchoice==="rock")?"YOU WIN!" : "YOU LOOSE!";
            break;
            case "scissor":
            result = (Computerchoice==="paper")?"YOU WIN!" : "YOU LOOSE!";
            break;

        }
    }
    PlayerchoiceDisplay.textContent= `PLAYER :${Playerchoice}`;
    ComputerchoiceDisplay.textContent = `COMPUTER: ${Computerchoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "YOU WIN!":
        playerScore++;
        resultDisplay.classList.add("greenText");
        break;
        case "YOU LOOSE!":
        computerScore++;
        resultDisplay.classList.add("redText");
        break;
    }
    PlayerscoreDisplay.textContent = `playerScore: ${playerScore}`;
    ComputerScoreDisplay.textContent = `ComputerScore: ${computerScore}`;
    
}