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
