const play = document.getElementById("play");

// Rock Paper Scissors Logic
// Computer Selects: ['Rock', 'Paper', 'Scissors'] random
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Player Selects: Rock | Paper | Scissors

// if Player: Rock && Computer: Scissors, Player + 1
// if Player: Paper && Computer: Rock, Player + 1
// if Player: Scissors && Computer: Paper, Player + 1
// if Player: Rock && Computer: Paper, Computer + 1
// if Player: Paper && Computer: Scissors, Computer + 1
// if Player: Scissors && Computer: Rock, Computer + 1
// if Player: === Computer:, Draw

// if playerScore === 5, Player Wins
// if computerScore === 5, Computer Wins

// function playRound(playerSelection, computerSelection) {
//   return `Player: ${playerSelection}, Computer: ${computerSelection}`;
// }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
