'use strict';

const heart = document.querySelector('.heart');
const likeDisplay = document.querySelector('.likes-number');

heart.onclick = function () {
    heart.classList.toggle('added');
    
    let likeAmount = Number(likeDisplay.textContent);
    likeAmount = heart.classList.contains('added') ? likeAmount + 1 : likeAmount - 1;
    likeDisplay.textContent = likeAmount;
};
