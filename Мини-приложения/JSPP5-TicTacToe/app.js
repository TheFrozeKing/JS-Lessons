'use strict'

const inputs = document.querySelectorAll('input');
const startButton = document.querySelector('button');
const mainText = document.querySelector('h1');

const turnColors = ['player-one-turn','player-two-turn'];

inputs[0].value = '';
inputs[1].value = '';

startButton.addEventListener('click', (evt) => {
    if(inputs[0].value === '' || inputs[1].value === ''){
        alert("Введите имена игроков!");
        return;
    }

    
    document.body.classList.toggle(turnColors[0]);
    // startMatch();
})

