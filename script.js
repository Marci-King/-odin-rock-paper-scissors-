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

function getHumanChoice() {
  let userInput = prompt("Enter rock, paper, or scissors");
  return userInput;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  console.log("Human chose:", humanChoice);
  console.log("Computer chose:", computerChoice);

  if (humanChoice === computerChoice) {
    return "Its a tie, play again";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
  }

  console.log("Final scores:");
  console.log("Human:", humanScore, "Computer:", computerScore);

  if (humanScore > computerScore) {
    console.log("You won the game");
  } else if (computerScore > humanScore) {
    console.log("You lost the game");
  } else {
    console.log("Its a tie");
  }
}

playGame();

//Practuce arrays

let fruits = ["cake", "banana", "apple"];
console.log(fruits[1]);
