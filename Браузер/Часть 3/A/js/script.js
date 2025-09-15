'use strict';

const createElement = (tagName, className, text = '', appendTo) =>{
    let newElement = document.createElement(tagName);
    newElement.classList.add(className);
    newElement.textContent = text;

    appendTo.appendChild(newElement);
    if(appendTo){
    }
    return newElement;
}

const createImage = (className, imageUrl, alt, appendTo) => {
    let image = createElement('img', className, '', appendTo);
    image.src = imageUrl;
    image.alt = alt;
    if(appendTo){
        appendTo.appendChild(image);
    }
}

const initializeButtons = () => {
    let popup = document.querySelector('.modal');
    //popup.classList.add('modal--show');

    let openButtons = document.querySelectorAll('.button-open');
    openButtons.forEach(element => element.addEventListener('click', (evt) => {evt.preventDefault(); popup.classList.add('modal--show')}));

    let closeButtons = document.querySelectorAll('.button-close');
    closeButtons.forEach(element => element.addEventListener('click', (evt) => {evt.preventDefault(); popup.classList.remove('modal--show')}));
    document.addEventListener('keydown', (key) => 
        {
            if(key.key === 'Escape'){
                popup.classList.remove('modal--show');   
            }
        })
}
initializeButtons();