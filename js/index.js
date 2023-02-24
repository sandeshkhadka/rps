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

function play() {
    let computerChoice = getComputerChoice();
    let playerChoice = this.dataset['choice'];
    let winner = decide(playerChoice,computerChoice);
    console.log(`You: ${playerChoice} , Computer: ${computerChoice}`);
    switch (winner) {
        case "player":
            console.log(`You won ${playerChoice} beats ${computerChoice}`);
            resultDiv.innerText = `You won ${playerChoice} beats ${computerChoice}`
            break;
        case "computer":
            console.log(`Computer won ${computerChoice} beats ${playerChoice}`);
            resultDiv.innerText = `Computer won ${computerChoice} beats ${playerChoice}`
            break;
        case "tie":
            console.log(`It's a tie , You : ${playerChoice} Computer: ${computerChoice}`);
            resultDiv.innerText = `It's a tie , You : ${playerChoice} Computer: ${computerChoice}`
            break;

        default:
            throw new Error("Unexpected decision");
    }
}
const choiceBtns = document.querySelectorAll(".choiceBtn");
choiceBtns.forEach(btn => btn
    .addEventListener('click',play)
);










