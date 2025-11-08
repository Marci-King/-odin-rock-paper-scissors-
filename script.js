const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
const winnerDiv = document.querySelector("#winner");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.random() * 3;
  let choice = Math.floor(randomNumber);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    resultsDiv.textContent = "Its a tie, play again";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    resultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }
  scoreDiv.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
  if (humanScore === 5) {
    winnerDiv.textContent = "You won the game!";
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  } else if (computerScore === 5) {
    winnerDiv.textContent = "Computer won the game!";
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}

rockButton.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("rock", computerChoice);
});

paperButton.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("paper", computerChoice);
});

scissorsButton.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("scissors", computerChoice);
});
