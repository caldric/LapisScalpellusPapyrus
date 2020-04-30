// Define possible moves
const moves = ['lapis', 'scalpellus', 'papyrus']

// Obtain moves from player and computer
let playerMoveIndex = parseInt(prompt('Select your move:\n(0) Lapis\n(1) Scalpellus\n(2)Papyrus'));
let playerMove = moves[playerMoveIndex];
let computerMoveIndex = Math.floor(Math.random() * 3);
let computerMove = moves[computerMoveIndex];

console.log(`Player selected ${playerMove}!`);
console.log(`Computer selected ${computerMove}!`);

// View outcome of match
let winner = declareWinner(playerMoveIndex, computerMoveIndex)
if (winner) {
    console.log(`${titleCase(winner)} wins!`);
} else {
    console.log(`It's a tie!`);
}


function declareWinner(playerMoveIndex, computerMoveIndex) {
    let moveDifference = (computerMoveIndex - playerMoveIndex) % 3;
    switch (moveDifference) {
        case 0:
            return null;
            break;
        case 1:
            return 'player';
            break;
        case 2:
            return 'computer';
            break;
    }
}


function titleCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
