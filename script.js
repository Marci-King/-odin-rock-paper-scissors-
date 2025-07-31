let humanScore = 0;

let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.random() * 3; // Generate random number between 0 and 2.999...

  let choice = Math.floor(randomNumber);
  // Convert to whole number (0, 1, or 2)

  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(getComputerChoice());

function getHumanChoice() {
  let userInput = prompt("Enter rock, paper, or scissors");
  return userInput;
}

console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  console.log("Human chose:", humanChoice);
  console.log("Computer chose:", computerChoice);
}

playRound("ROCK", "scissors");
