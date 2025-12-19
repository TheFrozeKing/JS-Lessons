'use strict'

const inputs = document.querySelectorAll('input');
const startButton = document.querySelector('button');
const mainText = document.querySelector('h1');

const startContainer = document.querySelector('.start-container');
const gameContainer = document.querySelector('.game-container');
const cells = document.querySelectorAll('.cell');

const turnColors = ['player-one-turn', 'player-two-turn'];

const playTemplates = [document.querySelector("#cross-template").content.querySelector('.cross'), document.querySelector("#dot-template").content.querySelector('.dot')];

let playerNames = [];
let currentPlayerIndex = 0;
let moveCount = 0;
let isGameOver = false;

const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

inputs[0].value = '';
inputs[1].value = '';

const startMatch = () => {
    document.body.classList.toggle(turnColors[0]);
    startContainer.classList.toggle('hidden');
    gameContainer.classList.toggle('hidden');

    playerNames = [inputs[0].value, inputs[1].value];

    mainText.textContent = `Ход - ${playerNames[currentPlayerIndex]}`;
}

const hasWon = (playX, playY) => {
    //https://stackoverflow.com/questions/1056316/algorithm-for-determining-tic-tac-toe-game-over
    // сам не додумался как эффективно это сделать, из идей было 
    // каждый раз сканировать всё поле, но тут получше

    
    for (let i = 0; i < 3; i++) {
        if (board[playX][i] != (currentPlayerIndex + 1)) {
            break;
        }
        if (i === 2) {
            return true;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (board[i][playY] != (currentPlayerIndex + 1)) {
            break;
        }
        if (i === 2) {
            return true;
        }
    }

    if (playX == playY) { 
        for (let i = 0; i < 3; i++) { // диагональ слева направо
            if (board[i][i] != (currentPlayerIndex + 1))
                break;
            if (i == 2) {
                return true;
            }
        }

        for(let i = 2; i > -1; i--){ // диагональ назад
                if(board[i][i] != (currentPlayerIndex + 1))
                    break;
                if(i == 0){
                    return true;
                }
            }
    }

    return false;
}

// const hasStaled = () => { чето тупанул с этой темой
//     let emptySpots = 0;
//     board.forEach(row => {
//         row.forEach(column => {
//             if(column === 0){
//                 emptySpots++;
//             };
//         });
//     });

//     return emptySpots === 0;
// }

const playTurn = cell => {
    if(isGameOver){
        return;
    }
    
    const row = cell.dataset.row;
    const col = cell.dataset.col;

    if (board[row][col] === 0) {
        const playFill = playTemplates[currentPlayerIndex].cloneNode(true);
        cell.appendChild(playFill);
        board[row][col] = currentPlayerIndex + 1;
    }
    else {
        return;
    }
    moveCount++;

    if (hasWon(row, col)) {
        mainText.textContent = `${playerNames[currentPlayerIndex]} победил!`;
        isGameOver = true;
        return;
    }
    // if(hasStaled()){
    if (moveCount >= 9) {
        mainText.textContent = `Ничья`;
        document.body.classList.remove(turnColors[0]);
        document.body.classList.remove(turnColors[1]);
        return;
    }

    currentPlayerIndex++;
    currentPlayerIndex %= 2;

    if (currentPlayerIndex == 0) {
        document.body.classList.add(turnColors[0]);
        document.body.classList.remove(turnColors[1]);
    }
    else {
        document.body.classList.add(turnColors[1]);
        document.body.classList.remove(turnColors[0]);
    }

    mainText.textContent = `Ход - ${playerNames[currentPlayerIndex]}`;

}

startButton.addEventListener('click', (evt) => {
    if (inputs[0].value === '' || inputs[1].value === '') {
        alert("Введите имена игроков!");
        return;
    };
    startMatch();
})

cells.forEach(cell => {
    cell.addEventListener('click', (evt) => {
        playTurn(cell);
    })
});



