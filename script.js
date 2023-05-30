let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
const playerScoreCount = document.getElementById("playerScore");
const computerScoreCount = document.getElementById("computerScore");

// Computer Selects: ['Rock', 'Paper', 'Scissors'] random
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result.innerHTML = `It's a draw! You both chose ${playerSelection}!`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerScore++;
    playerScoreCount.innerHTML = playerScore;
    result.innerHTML = `You win! ${playerSelection} beats ${computerSelection}!`;

    if (playerScore === 5) {
      result.innerHTML = "Player wins!";
    }
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    computerScore++;
    computerScoreCount.innerHTML = computerScore;
    result.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}!`;

    if (computerScore === 5) {
      result.innerHTML = "Computer wins!";
    }
  }

  return;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.value, computerSelection);
  });
});
