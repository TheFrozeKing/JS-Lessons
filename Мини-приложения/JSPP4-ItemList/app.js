'use strict'

const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const rectangle = document.querySelector('.rectangle');

const image = document.querySelector('img');
const title = document.querySelector('h2');
const text = document.querySelector('h3');

const objects = [
    {
        name : "Алмаз",
        imgUrl : 'img/diamond.png',
        text : "Алмаз — минерал, который представляет собой одну из аллотропных модификаций углерода. Без доступа воздуха алмаз постепенно переходит в графит, кристаллическая решетка которого отличается от строения алмаза.",
        classes : ["diamond-body", "diamond-rectangle", "diamond-button"],
    },
    {
        name : "Рубин",
        imgUrl : 'img/ruby.jpg',
        text : "Рубин — разновидность корунда, относится к классу оксидов, тригональная сингония, драгоценный камень красного цвета. ",
        classes : ["ruby-body", "ruby-rectangle", "ruby-button"],
    
    },
    {
        name : "Изумруд",
        imgUrl : 'img/emerald.webp',
        text : "Изумруд — драгоценный прозрачный минерал из группы берилла, знаменитый своим насыщенным зеленым цветом, который обусловлен примесями хрома и ванадия.",
        classes : ["emerald-body", "emerald-rectangle", "emerald-button"],
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
    toggleObjectClasses();

    currentObject += direction;
    currentObject = clamp(currentObject, 0, objects.length - 1);
    
    toggleObjectClasses();


    displayInfo();
}

const toggleObjectClasses = () => {
    document.body.classList.toggle(objects[currentObject].classes[0]);
    rectangle.classList.toggle(objects[currentObject].classes[1]);
    leftButton.classList.toggle(objects[currentObject].classes[2]);
    rightButton.classList.toggle(objects[currentObject].classes[2]);
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

toggleObjectClasses();