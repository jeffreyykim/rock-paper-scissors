let humanScore = 0;
let computerScore = 0;
const WINNING_SCORE = 5;

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1:
            return "rock";
        case 2:
            return "paper"; 
        case 3:
            return "scissors";
        default:
            return "rock";
    }
}

function playRound(humanChoice) {
    if (humanScore >= WINNING_SCORE || computerScore >= WINNING_SCORE) {
        return;
    }

    const computerChoice = getComputerChoice();
    const lowerCaseChoice = humanChoice.toLowerCase();
    let message = '';

    if (lowerCaseChoice === "rock" && computerChoice === "rock") {
        message = "It's a tie!";
    } else if (lowerCaseChoice === "rock" && computerChoice === "paper") {
        message = "Paper beats rock. You lose!";
        computerScore++;
    } else if (lowerCaseChoice === "rock" && computerChoice === "scissors") {
        message = "Rock beats scissors. You win!";
        humanScore++;
    } else if (lowerCaseChoice === "paper" && computerChoice === "rock") {
        message = "Paper beats rock. You win!";
        humanScore++;
    } else if (lowerCaseChoice === "paper" && computerChoice === "paper") {
        message = "It's a tie!";
    } else if (lowerCaseChoice === "paper" && computerChoice === "scissors") {
        message = "Scissors beats paper. You lose!";
        computerScore++;
    } else if (lowerCaseChoice === "scissors" && computerChoice === "rock") {
        message = "Rock beats scissors. You lose!";
        computerScore++;
    } else if (lowerCaseChoice === "scissors" && computerChoice === "paper") {
        message = "Scissors beats paper. You win!";
        humanScore++;
    } else if (lowerCaseChoice === "scissors" && computerChoice === "scissors") {
        message = "It's a tie!";
    }

    if (humanScore >= WINNING_SCORE) {
        message += " You reached 5 points. You win the game!";
        disableButtons();
    } else if (computerScore >= WINNING_SCORE) {
        message += " Computer reached 5 points. You lose the game!";
        disableButtons();
    }

    updateResults(message, humanScore, computerScore);
}

function updateResults(message, humanScore, computerScore) {
    const resultsDiv = document.querySelector('.results');
    resultsDiv.innerHTML = `
        <p>${message}</p>
        <p>Human Score: ${humanScore}, Computer Score: ${computerScore}</p>
    `;
}

function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));