function computerSelection() {
    options = ["ROCK", "PAPER", "SCISSORS"];
    index = Math.floor((Math.random()*3));
    return options[index]
}

function simulateRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return `It's a tie! Both have chosen ${computerSelection}.`
    } 
    
    if (computerSelection === "ROCK") {
        if (playerSelection === "SCISSORS") {
            return `You lose! Computer played ${computerSelection}, it beats ${playerSelection}.`
        } else {
            return `You win! ${playerSelection} beats ${computerSelection}.`
        }
    }

    if (computerSelection === "SCISSORS") {
        if (playerSelection === "PAPER") {
            return `You lose! Computer played ${computerSelection}, it beats ${playerSelection}.`
        } else {
            return `You win! ${playerSelection} beats ${computerSelection}.`
        }
    }

    if (computerSelection === "PAPER") {
        if (playerSelection === "ROCK") {
            return `You lose! Computer played ${computerSelection}, it beats ${playerSelection}.`
        } else {
            return `You win! ${playerSelection} beats ${computerSelection}.`
        }
    }    
}

function game() {

    let win = 0, lose = 0;
    for (let i = 0; i < 5; i++) {
        userDecision = prompt("What are you selecting? (Rock/Paper/Scissors)").toUpperCase().trim();
        computerDecision = computerSelection();

        result = simulateRound(userDecision, computerDecision);
        console.log(result);
        if (result.includes("win")) {
            win++;
        } else if (result.includes("lose")) {
            lose++;
        } 
    }

    if (win > lose) {
        return "You win!";
    } else if (win < lose) {
        return "You lose!";
    } else {
        return "Tie!";
    }
}

console.log(game());