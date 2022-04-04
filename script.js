function playerPlay(buttonID) {
    switch (buttonID) {
        case 'button-rock':
            return 'Rock';
        case 'button-paper':
            return 'Paper';
        case 'button-scissors':
            return 'Scissors';
    }
}

function computerPlay() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    // return a random choice
    return choice[Math.floor(Math.random() * 3)];
}

function playRound(event) {
    let result;
    const playerSelection = playerPlay(event.target.id);
    const computerSelection = computerPlay();

    if (playerSelection==='Rock') {
        if (computerSelection==='Rock') result = 'Draw';
        if (computerSelection==='Paper') result = 'Lose';
        if (computerSelection==='Scissors') result = 'Win';
    }
    if (playerSelection==='Paper') {
        if (computerSelection==='Rock') result = 'Win';
        if (computerSelection==='Paper') result = 'Draw';
        if (computerSelection==='Scissors') result = 'Lose';
    }
    if (playerSelection==='Scissors') {
        if (computerSelection==='Rock') result = 'Lose';
        if (computerSelection==='Paper') result = 'Win';
        if (computerSelection==='Scissors') result = 'Draw';
    }
    
    switch (result) {
        case 'Win':
            playerScore++;
            resultText.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
            break;
        case 'Lose':
            computerScore++;
            resultText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            break;
        case 'Draw':
            resultText.textContent = `It's a ${playerSelection} draw!`;
            break;

    }

    scorePlayer.textContent = `You: ${playerScore}`;
    scoreComputer.textContent = `CPU: ${computerScore}`;

    if (playerScore===5 || computerScore===5) {
        finishGame();
    }
}

function initGame() {
    btnRestart.style.display = 'none';
    
    playerScore = 0;
    computerScore = 0;

    winnerText.textContent = '';
    scorePlayer.textContent = `You: ${playerScore}`;
    scoreComputer.textContent = `CPU: ${computerScore}`;
    resultText.textContent = '';

    buttons.forEach(button => {
        button.addEventListener('click', playRound);
        button.style.pointerEvents = 'auto';
    });
}

function finishGame() {
    buttons.forEach(button => {
        button.removeEventListener('click', playRound);
        button.style.pointerEvents = 'none';
    });

    if (playerScore===5) {
        winnerText.textContent = 'You won!';
    } else {
        winnerText.textContent = 'You lost!';
    }

    btnRestart.style.display = 'block';
}

const winnerText = document.querySelector('#winner-text');
const scorePlayer = document.querySelector('#score-player');
const scoreComputer = document.querySelector('#score-computer');
const buttons = document.querySelectorAll('.btn');
const resultText = document.querySelector('#result-text');
const btnRestart = document.querySelector('#btn-restart');

let playerScore, computerScore;

btnRestart.addEventListener('click', initGame);

initGame();