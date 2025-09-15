'use strict';

const createElement = (tagName, className, text = '', appendTo) =>{
    let newElement = document.createElement(tagName);
    if(className != ''){
        newElement.classList.add(className);
    }
    newElement.textContent = text;

    appendTo.appendChild(newElement);
    if(appendTo){
    }
    return newElement;
}

const initializeTask = task => {

    const checkbox = task.querySelector('.todo-list-input');
    checkbox.addEventListener('change', () => {
        task.remove();
    });
}

const createTask = (appendTo, text) => {
    const newTask = createElement('li','todo-list-item','', appendTo);

    const label = createElement('label','','',newTask);

    const input = createElement('input','todo-list-input', '',label);
    input.type = 'checkbox';

    const span = createElement('span','',text,label)
    
    initializeTask(newTask);
}


const todoList = document.querySelector('.todo-list');

for (const task of todoList.children) {
    initializeTask(task);
};



//createTask(todoList, 'купить слона');
