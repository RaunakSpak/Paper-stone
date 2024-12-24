// Possible choices
const choices = ['stone', 'paper', 'scissors'];

// Get buttons
const stoneBtn = document.getElementById('stone');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultDiv = document.getElementById('result');

// Function to get computer's choice
const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

// Function to determine the winner
const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'stone' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'stone') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
};

// Function to play the game
const playGame = (playerChoice) => {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    resultDiv.innerHTML = `
        <p>You chose: <strong>${playerChoice}</strong></p>
        <p>Computer chose: <strong>${computerChoice}</strong></p>
        <p><strong>${result}</strong></p>
    `;
};

// Event listeners for buttons
stoneBtn.addEventListener('click', () => playGame('stone'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));
