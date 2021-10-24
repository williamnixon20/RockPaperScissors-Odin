windisplay = document.getElementById('wins');
losedisplay = document.getElementById('loses');
buttons = document.querySelectorAll('.gamebutton');
jombotron = document.querySelector('.title');
modal = document.querySelector('.modal');
retry = document.getElementById('restartBtn');
display = document.querySelector('#display');
endgamemsg = document.getElementById('endgameMsg');

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
    console.log(jombotron);
    if (win > lose) {
        jombotron.textContent = "You won, Hooray!";
        endgamemsg.textContent = "Well done!"
    } else if (win < lose) {
        jombotron.textContent = "You lost :(";
        endgamemsg.textContent = "Better luck next time!"
    }
}

function handleEnding() {
    modal.classList.add("active"); 
    retry.addEventListener('click', () => closeEndGameModal());
}

function closeEndGameModal() {
    modal.classList.remove('active');
    restartGame();
}

function restartGame() {
    windisplay.textContent = `Player : 0`;
    losedisplay.textContent =  `Computer : 0`;
    display.textContent = "";
    jombotron.textContent = "Let the fight begin!"
    win = 0, lose = 0;
}

var win = 0, lose = 0;
function game() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            userDecision = button.id;
            computerDecision = computerSelection();
            result = simulateRound(userDecision, computerDecision);

            display.textContent = `${result}`;
            if (result.includes("win")) {
                win++;
                windisplay.textContent = `Player : ${win}`;
            } else if (result.includes("lose")) {
                lose++;
                losedisplay.textContent= `Computer : ${lose}`;
            }

            if (win >=5 || lose >= 5) {
                evaluate(win, lose);
                handleEnding();
            }
        })
    });
}

game();