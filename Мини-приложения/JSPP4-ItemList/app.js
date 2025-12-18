'use strict'

const radioButtons = document.querySelectorAll('input[type="radio"]');
const title = document.querySelector('h3');
const confirmActionButtons = document.querySelectorAll('.button-confirm-action');
const itemTemplate = document.querySelector('#item-template').content.querySelector('.item');

const nameInput = document.querySelector("#name-input");
const priceInput = document.querySelector("#price-input");

//#region page handling 

const pages = [
    {
        div: document.querySelector('.item-container'),
        title: "Список товаров",
    },
    {
        div: document.querySelector('.add-item-container'),
        title: "Новый товар",
    },
    {
        div: document.querySelector('.add-item-container'),
        title: "Изменить товар",
    },
];

let currentPageIndex = 0;

radioButtons.forEach((button, id) => {
    button.addEventListener('click', (evt) => {
        switchPage(id);
    })
})

const switchPage = newPageIndex => {
    pages[currentPageIndex].div.classList.add('hidden');
    pages[newPageIndex].div.classList.remove('hidden');
    currentPageIndex = newPageIndex;

    if (currentPageIndex === 0) {
        radioButtons[0].checked = true;
    }

    if (pages[currentPageIndex].title === 'Изменить товар') {
        radioButtons[0].checked = false;
        radioButtons[1].checked = false;
        confirmActionButtons[0].classList.add('hidden');
        confirmActionButtons[1].classList.remove('hidden');
    }
    else if (pages[currentPageIndex].title === 'Новый товар') {
        nameInput.value = "";
        priceInput.value = "";
        confirmActionButtons[1].classList.add('hidden');
        confirmActionButtons[0].classList.remove('hidden');
    }

    title.textContent = pages[currentPageIndex].title;
}



//#endregion

//#region item handling

let selectedObject = 0;
let selectedObjectNameText;
let selectedObjectPriceText;

confirmActionButtons[0].addEventListener('click', (evt) => {
    if(nameInput.value === '' || priceInput.value === ''){
        alert("Введите название и цену!");
        return;
    }
    addItem(nameInput.value,priceInput.value);
    nameInput.value = "";
    priceInput.value = "";
    switchPage(0);
});

confirmActionButtons[1].addEventListener('click', (evt) => {
    if(nameInput.value === '' || priceInput.value === ''){
        alert("Введите название и цену!");
        return;
    }
    editItem();
    switchPage(0);
});

const addItem = (name, price) => {
    const itemContainer = pages[0].div;

    const newItem = itemTemplate.cloneNode(true);
    itemContainer.appendChild(newItem);

    const deleteButton = newItem.querySelector('.delete');
    const editButton = newItem.querySelector('.edit');

    const nameText = newItem.querySelector('#name');
    const priceText = newItem.querySelector('#price');

    nameText.textContent = name;

    price = price.replace('.',',');
    price = price.indexOf(',') === -1 ? price + ',00' : price;

    priceText.textContent = price + " р.";

    deleteButton.addEventListener('click', (evt) => {
        newItem.remove();
    });

    editButton.addEventListener('click', (evt) => {
        const index = [...itemContainer.children].indexOf(newItem);
        sendToEdit(index, nameText, priceText);
    });
}

const sendToEdit = (itemId, itemNameText, itemPriceText) => {
    selectedObject = itemId;

    selectedObjectNameText = itemNameText;
    selectedObjectPriceText = itemPriceText;
    
    let priceText = itemPriceText.textContent;
    priceText = priceText.replace(' р.', '');
    priceText = priceText.replace(',','.');

    console.log(priceText);
    nameInput.value = itemNameText.textContent;
    priceInput.value = priceText;
    switchPage(2);

}

const editItem = () => {
    selectedObjectNameText.textContent = nameInput.value;

    let priceText = priceInput.value;
    priceText = priceText.replace('.',',');
    priceText = priceText.indexOf(',') === -1 ? priceText + ',00' : priceText;

    selectedObjectPriceText.textContent = priceText + ' р.';

    nameInput.value = "";
    priceInput.value = "";

    switchPage(0);
}

//#endregion

const prewarm = () => {

    if (currentPageIndex === 0 || currentPageIndex === 1) {
        radioButtons[currentPageIndex].checked = true;
        nameInput.value = "";
        priceInput.value = "";
    }
    else {
        radioButtons[0].checked = false;
        radioButtons[1].checked = false;
    }
    switchPage(currentPageIndex);

    addItem('Молоко', '100,00');
    addItem('Хлеб', '40,90');
    addItem('Сухарики "Три корочки"', '29,90');
    addItem('Сахар в кубиках', '200,99');
    addItem('Чай "Гринфилд"', '180,99');
}

prewarm();