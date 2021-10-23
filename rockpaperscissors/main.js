buttons = document.querySelectorAll('button');

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

function evaluate(win, lose) {
    if (win > lose) {
        document.querySelector('#jombotron').innerHTML = "Hooray!";
    } else if (win < lose) {
        document.querySelector('#jombotron').innerHTML = "Noob!";
    }

    buttons.forEach((button) => {
        button.setAttribute('disabled', ' ');
    })
}
function game() {
    let win = 0, lose = 0;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            userDecision = button.id;
            computerDecision = computerSelection();
            result = simulateRound(userDecision, computerDecision);
            document.querySelector('#display').textContent = `${result}`;
            if (result.includes("win")) {
                win++;
                document.querySelector('#wins').textContent= `${win}`;
            } else if (result.includes("lose")) {
                lose++;
                document.querySelector('#loses').textContent= `${lose}`;
            }
            if (win >=5 || lose >= 5) {
                evaluate(win, lose);
            }
        })
    });
}

game();