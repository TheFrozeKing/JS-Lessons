'use strict';

const initializeButtons = () => {
    const popup = document.querySelector('.popup');

    const openButtons = document.querySelectorAll('.button-show');
    openButtons.forEach(button => button.addEventListener('click', (evt) => {
        evt.preventDefault();
        popup.classList.add('popup--open');
    }));

    const closeButtons = document.querySelectorAll('.button-hide');
    closeButtons.forEach(button => button.addEventListener('click', (evt) => {
        evt.preventDefault();
        popup.classList.remove('popup--open');
    }));

    document.addEventListener('keydown', key => {
        if(key.key === 'Escape'){
            popup.classList.remove('popup--open');
        }
    })
};

initializeButtons();


