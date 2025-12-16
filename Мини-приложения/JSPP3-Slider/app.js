'use strict'

const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

const image = document.querySelector('img');
const title = document.querySelector('h2');
const text = document.querySelector('h3');

const objects = [
    {
        name : "Алмаз",
        imgUrl : 'img/diamond.png',
        text : "Алмаз — минерал, который представляет собой одну из аллотропных модификаций углерода. Без доступа воздуха алмаз постепенно переходит в графит, кристаллическая решетка которого отличается от строения алмаза."
    },
    {
        name : "Рубин",
        imgUrl : 'img/ruby.jpg',
        text : "Рубин — разновидность корунда, относится к классу оксидов, тригональная сингония, драгоценный камень красного цвета. "
    },
    {
        name : "Изумруд",
        imgUrl : 'img/emerald.webp',
        text : "Изумруд — драгоценный прозрачный минерал из группы берилла, знаменитый своим насыщенным зеленым цветом, который обусловлен примесями хрома и ванадия."
    }
];


let currentObject = 0;

leftButton.addEventListener('click', (evt) => {
    switchObject(-1)
})

rightButton.addEventListener('click', (evt) => {
    switchObject(1)
})

const switchObject = direction => {
    currentObject += direction;
    currentObject = clamp(currentObject, 0, objects.length - 1);

    displayInfo();
}


const displayInfo = () => {
    const obj = objects[currentObject];

    image.src = obj.imgUrl;
    title.textContent = obj.name;
    text.textContent = obj.text;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}