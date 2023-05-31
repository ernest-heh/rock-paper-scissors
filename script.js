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

function endGame() {
  buttons.forEach((button) => (button.disabled = true));
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    result.textContent = `It's a draw! You both chose ${playerSelection}!`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerScore++;
    playerScoreCount.textContent = playerScore;
    result.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;

    if (playerScore === 5) {
      result.textContent = "Player wins!";
      endGame();
    }
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    computerScore++;
    computerScoreCount.textContent = computerScore;
    result.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;

    if (computerScore === 5) {
      result.textContent = "Computer wins!";
      endGame();
    }
  }

  return;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.value);
  });
});
