'use strict';

let cardsData = [
    {
        inStock: true,
        imgUrl: 'system/img/choco.jpg',
        text: 'Сливочно-кофейное с кусочками шоколада',
        price: 310,
        isHit: true,
        specialOffer: 'Двойная порция сиропа бесплатно!'
    },
    {
        inStock: false,
        imgUrl: 'system/img/lemon.jpg',
        text: 'Сливочно-лимонное с карамельной присыпкой',
        price: 125,
        isHit: false
    },
    {
        inStock: true,
        imgUrl: 'system/img/cowberry.jpg',
        text: 'Сливочное с брусничным джемом',
        price: 170,
        isHit: false
    },
    {
        inStock: true,
        imgUrl: 'system/img/cookie.jpg',
        text: 'Сливочное с кусочками печенья',
        price: 250,
        isHit: false
    },
    {
        inStock: true,
        imgUrl: 'system/img/creme-brulee.jpg',
        text: 'Сливочное крем-брюле',
        price: 190,
        isHit: false
    }
];

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

const createCard = (cardData, appendTo) => {
    let newCard = createElement('li', 'good', '', appendTo);

    let description = createElement('h2', 'good__description', cardData.text, newCard);

    let image = createImage('good__image', cardData.imgUrl, cardData.text, newCard);

    let price = createElement('p','good__price', cardData.price, newCard);

    newCard.classList.add(cardData.inStock ? 'good--available' : 'good--unavailable');

    if(cardData.isHit){
        newCard.classList.add('good--hit');
    }

    return newCard;
}

const cardList = document.querySelector('.goods');
const renderCards = (cardsData) => {
    for(let i = 0; i < cardsData.length; i++){
            createCard(cardsData[i], cardList);
        };    
}

renderCards(cardsData);
