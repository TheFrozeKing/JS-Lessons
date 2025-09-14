'use strict';

let catalogData = [
    {
        isAvailable: true,
        isSpecial: false
    },
    {
        isAvailable: false,
        isSpecial: false
    },
    {
        isAvailable: true,
        isSpecial: true
    },
    {
        isAvailable: true,
        isSpecial: false
    },
    {
        isAvailable: false,
        isSpecial: false
    }
];

const updateCards = itemStatuses => {
    let catalogItems = document.querySelectorAll(".product"); 

    for(let i = 0; i < catalogItems.length; i++){
        
        let availability = itemStatuses[i].isAvailable ? 'product--available' : 'product--unavailable';        
        catalogItems[i].classList.add(availability);

        if(itemStatuses[i].isSpecial){
            catalogItems[i].classList.add('product--special');
        }
    }
}
updateCards(catalogData);

