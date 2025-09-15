'use strict';

const pictures = [
    'system/img/tomato-red-large.jpg',
    'system/img/tomato-yellow-large.jpg',
    'system/img/tomato-strange-large.jpg'
];

const fullPicture = document.querySelector('.full-picture');

const initializeButtons = (pictureArray, fullPic) => {
    const imageButtons = document.querySelectorAll('.gallery__picture-preview');

    imageButtons.forEach((button, index) => {
        button.addEventListener('click', (evt) => {
            fullPic.src = pictureArray[index];
        });
    });
}

initializeButtons(pictures, fullPicture);
