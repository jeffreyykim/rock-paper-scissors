function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1:
            console.log("Computer chose rock");
            return "rock";
            break;
        case 2:
            console.log("Computer chose paper");
            return "rock";
            break;
        case 3:
            console.log("Computer chose scissors");
            return "scissors";
            break;
        default:
            console.log("what");
            return "what";
    }
}


function getHumanChoice() {
    let humanChoice = prompt("rock, paper, or scissors?")
    return humanChoice;
}

function playGame() {
    let humanScore = 0; // Initialize humanScore
    let computerScore = 0; // Initialize computerScore

    function playRound(humanChoice, computerChoice) {
        const lowerCaseChoice = humanChoice.toLowerCase();
        if (lowerCaseChoice === "rock" && computerChoice === "rock") {
            console.log("it's a tie!");
        } else if (lowerCaseChoice === "rock" && computerChoice === "paper") {
            console.log("Paper beats rock. You lose!");
            computerScore++;
        } else if (lowerCaseChoice === "rock" && computerChoice === "scissors") {
            console.log("Rock beats scissors. You Win!");
            humanScore++; // Increment humanScore
        } else if (lowerCaseChoice === "paper" && computerChoice === "rock") {
            console.log("Paper beats rock. You Win!");
            humanScore++; // Increment humanScore
        } else if (lowerCaseChoice === "paper" && computerChoice === "paper") {
            console.log("It's a tie!");
        } else if (lowerCaseChoice === "paper" && computerChoice === "scissors") {
            console.log("Scissors beats paper. You lose!");
            computerScore++;
        } else if (lowerCaseChoice === "scissors" && computerChoice === "rock") {
            console.log("Rock beats scissors. You lose!");
            computerScore++;
        } else if (lowerCaseChoice === "scissors" && computerChoice === "paper") {
            console.log("Scissors beats paper. You win!");
            humanScore++; // Increment humanScore
        } else if (lowerCaseChoice === "scissors" && computerChoice === "scissors") {
            console.log("It's a tie!");
        }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }

    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    }


}

playGame()





