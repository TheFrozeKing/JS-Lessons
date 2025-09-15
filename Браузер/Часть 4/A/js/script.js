'use strict';

let photos = [
    'system/img/laptop-large.jpg',
    'system/img/microphone-large.jpg',
    'system/img/keyboard-large.jpg',
    'system/img/signboard-large.jpg',
    'system/img/tree-large.jpg'
];

const fullPhoto = document.querySelector('.full-photo');

const initializeButtons = photoArray => {
    const imageButtons = document.querySelectorAll('.gallery__photo-preview');
    
    imageButtons.forEach((button, index) => {
        button.addEventListener('click', (evt) => {
            console.log(photoArray[index]);
            fullPhoto.src = photoArray[index];
            console.log(fullPhoto);
            console.log('click ' + index);
        })
    })
}

initializeButtons(photos);
