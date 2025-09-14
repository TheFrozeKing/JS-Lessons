'use strict';

let assortmentData = [
    {
        inStock: true,
        isHit: false
    },
    {
        inStock: false,
        isHit: false
    },
    {
        inStock: true,
        isHit: true
    },
    {
        inStock: true,
        isHit: false
    },
    {
        inStock: false,
        isHit: false
    }
];

const setItemStatuses = itemData => {
    let itemCards = document.querySelectorAll('.good');

    for(let i = 0; i < itemCards.length; i++){
        let card = itemCards[i];
        let data = itemData[i];

        card.classList.add((data.inStock ? 'good--available' : 'good--unavailable'));

        if(data.isHit){
            card.classList.add('good--hit');
        }
    }
}

setItemStatuses(assortmentData);
