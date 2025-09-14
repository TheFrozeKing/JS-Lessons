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

for(let i = 0; i < catalogData.length; i++){
    //let product = document.querySelector(`.product:nth-child(${i})`);
    let product = document.querySelector(`.product:nth-child(` + i + `)`);
    
    switch(true){
        case !catalogData[i].isAvailable:
            product.classList.add("product--unavailable");
        case catalogData[i].isSpecial:
            product.classList.add("product--special");
    }
}

/* let specialProduct = document.querySelector('.product:nth-child(2)');
specialProduct.classList.add("product--special");

let unavailableProduct = document.querySelector('.product:last-child');
unavailableProduct.classList.add("product--unavailable");

console.log(unavailableProduct); */
