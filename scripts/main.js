// Define possible moves
const moves = ['lapis', 'scalpellus', 'papyrus']

// Instantiate player and computer move variables
let playerMove;
let computerMove;

// Assign the HTML buttons to variables
const lapisButton = document.getElementById('lapis');
const scalpellusButton = document.getElementById('scalpellus');
const papyrusButton = document.getElementById('papyrus');

// Assign event listener function
lapisButton.onclick = selection;
scalpellusButton.onclick = selection;
papyrusButton.onclick = selection;


function selection(event) {
    // Button event listener function that initiates the moves of both players
    playerSelection(event);
    computerSelection();
    declareWinner(playerMove, computerMove);
}


function playerSelection(event) {
    // Initiates the move of the player
    playerMove = event.target.id;
    console.log(`Player selected ${playerMove}!`);
}


function computerSelection() {
    // Initiates the move of the computer
    computerMove = moves[Math.floor(Math.random() * 3)];
    console.log(`Computer selected ${computerMove}!`);
}


function declareWinner(playerMove, computerMove) {
    // Compares the moves of both players and declares a winner
    let playerMoveIndex = moves.indexOf(playerMove);
    let computerMoveIndex = moves.indexOf(computerMove);
    let moveDifference = (computerMoveIndex - playerMoveIndex + 3) % 3;
    switch (moveDifference) {
        case 0:
            console.log("It's a tie!")
            break;
        case 1:
            console.log('Player wins!')
            break;
        case 2:
            console.log('Computer wins!')
            break;
    }
}
