'use strict';


let cardsData = [
    {
        isAvailable: true,
        imgUrl: 'system/img/item-1.jpg',
        text: 'Селфи-палка для начинающих',
        price: 200,
        isSpecial: false
    },
    {
        isAvailable: false,
        imgUrl: 'system/img/item-2.jpg',
        text: 'Профессиональная селфи-палка',
        price: 1500,
        isSpecial: false
    },
    {
        isAvailable: true,
        imgUrl: 'system/img/item-3.jpg',
        text: 'Непотопляемая селфи-палка',
        price: 2500,
        isSpecial: false
    },
    {
        isAvailable: true,
        imgUrl: 'system/img/item-4.jpg',
        text: 'Селфи-палка «Следуй за мной»',
        price: 4900,
        isSpecial: true,
        specialPrice: 100
    }
];

const createElement = (tagName, className, text = '', appendTo) => {
    let newElement = document.createElement(tagName);
    newElement.classList.add(className);
    newElement.textContent = text;

    if (appendTo) {
        appendTo.appendChild(newElement);
    }

    return newElement;
}

const createImage = (className, source, alt, appendTo) => {
    let image = createElement('img', className);
    image.src = source;
    image.alt = alt;
    if(appendTo){
        appendTo.appendChild(image);
    }
}

const createCard = (cardData, appendTo) => {

    let newCard = createElement('li', 'product', '', appendTo);

    let title = createElement('h2', 'product__title', cardData.text, newCard);

    let image = createImage('product__image', cardData.imgUrl, cardData.text, newCard);

    let price = createElement('p', 'product__price', cardData.price, newCard);

    newCard.classList.add(cardData.isAvailable ? 'product--available' : 'product--unavailable');

    if(cardData.isSpecial){
        newCard.classList.add('product--special');
        let discountedPrice = createElement('p', 'product__special-price', cardData.specialPrice, newCard);
    }

    return newCard;
}

const productList = document.querySelector('.products');

for (let i = 0; i < cardsData.length; i++) {
    createCard(cardsData[i], productList);
}

/* Async test
async function testCard(params) {
    let newCard = document.createElement('li');
    newCard.classList.add('product');
    productList.appendChild(newCard);
    
    newCard.textContent = 'No Name';
    
    await awaitSeconds(1);
    
    newCard.textContent = 'Yes Name';

}

function awaitSeconds(seconds){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');;
        }, seconds * 1000);
    });
}

testCard();
*/