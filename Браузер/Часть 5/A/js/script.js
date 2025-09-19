'use strict';

const todoList = document.querySelector('.todo-list');
const itemForm = document.querySelector('.add-form');
const inputField = document.querySelector('.add-form-input');
const taskTemplate = document.querySelector('#task-template').content.querySelector('.todo-list-item');

const initializeTask = task => {
    const checkbox = task.querySelector('.todo-list-input');
    checkbox.checked = false;
    checkbox.addEventListener('change', () => {
        task.remove();
        toggleEmptyMessage();
    });
}

const createTask = (appendTo, text) => {
    const newTask = taskTemplate.cloneNode(true);
    todoList.appendChild(newTask);
    
    const span = newTask.querySelector('span');
    span.textContent = text;
    
    initializeTask(newTask);
}

const addTask = evt => {
    evt.preventDefault();
    createTask(todoList, inputField.value);

    toggleEmptyMessage();
    inputField.value = '';
}

const toggleEmptyMessage = () =>{
    if(todoList.children.length > 0){
        emptyMessage.classList.add('hidden');
        return;
    }
    emptyMessage.classList.remove('hidden');
}

const prewarm = () => {    
    for (const task of todoList.children) {
        initializeTask(task);
    };
    itemForm.addEventListener('submit', addTask);
}

const emptyMessage = document.querySelector('.empty-tasks');
prewarm();

