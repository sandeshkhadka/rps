const resultDiv = document.querySelector(".result");
let choice = ["rock", "paper", "scissors"];
function getComputerChoice() {
    let random = Math.floor(Math.random() * choice.length)
    return choice[random];
}

function decide(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) return "tie";
    if (playerChoice == "rock") {
        if (computerChoice == "paper") return "computer";
        if (computerChoice == "scissors") return "player";
    }
    if (playerChoice == "paper") {
        if (computerChoice == "rock") return "player";
        if (computerChoice == "scissors") return "computer";
    }
    if (playerChoice == "scissors") {
        if (computerChoice == "rock") return "computer";
        if (computerChoice == "paper") return "player";
    }
    throw new Error("Unexpected choice");
}
let playerScore = 0, computerScore = 0, draw = 0, round = 1;
const playerScoreHolder = document.querySelector("#playerScore");
const computerScoreHolder = document.querySelector("#computerScore");
const playerLastChoice = document.querySelector("#playerLastChoice");
const computerLastChoice = document.querySelector("#computerLastChoice");
const roundCounter = document.querySelector(".round-counter");
const text = document.querySelector(".secondaryText");
const choiceContainer = document.querySelector(".choice-container");
const playAgain = document.querySelector("#playAgain");
function resetGame() {
    playerScore = computerScore = 0;
    round = 1;
    draw = 0; 
    playerLastChoice.setAttribute("src", "images/question-mark.png");
    computerLastChoice.setAttribute("src", "images/question-mark.png");
    computerScoreHolder.innerText = `Score: ${computerScore}`;
    playerScoreHolder.innerText = `Score: ${playerScore}`;
    roundCounter.innerText = `Round: ${round}`;
    choiceContainer.classList.remove("hide");
    playAgain.classList.add("hide");
    text.innerText ="Make your move";
}
function play() {
    let computerChoice = getComputerChoice();
    let playerChoice = this.dataset['choice'];
    let winner = decide(playerChoice, computerChoice);
    round++;
    playerLastChoice.setAttribute("src", `images/${playerChoice}.png`);
    computerLastChoice.setAttribute("src", `images/${computerChoice}.png`);
    console.log(`You: ${playerChoice} , Computer: ${computerChoice}`);
    switch (winner) {
        case "player":
            playerScore++;
            console.log(`You won ${playerChoice} beats ${computerChoice}`);
            playerScoreHolder.innerText = `Score: ${playerScore}`;
            break;
        case "computer":
            computerScore++;
            console.log(`Computer won ${computerChoice} beats ${playerChoice}`);
            computerScoreHolder.innerText = `Score: ${computerScore}`;
            break;
        case "tie":
            draw ++;
            console.log(`It's a tie , You : ${playerChoice} Computer: ${computerChoice}`);
            break;

        default:
            throw new Error("Unexpected decision");
    }
    roundCounter.innerText = `Round: ${round} Tie: ${draw}`;
    if (round > 5) {
        roundCounter.innerText = `Game Over\n Tie: ${draw}`;
        choiceContainer.classList.add("hide");
        playAgain.classList.remove("hide");
        if (playerScore > computerScore) {
            text.innerText = `Congratulation! You won.`;
        } else if (playerScore < computerScore) {

            text.innerText = `Sed you lose, cry now`;
        } else {
            text.innerText = `wau it's draw`;
        }
    }
}
const choiceBtns = document.querySelectorAll(".choiceBtn");
choiceBtns.forEach(btn => btn
    .addEventListener('click', play)
);
playAgain.addEventListener('click', resetGame);








