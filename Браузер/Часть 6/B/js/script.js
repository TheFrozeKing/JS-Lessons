'use strict';

const list = document.querySelector('.todo-list');
const input = document.querySelector('.todo-input');
const form = document.querySelector('.todo-form');
const priority = document.querySelector('.todo-priority');

priority.onclick = function () {
    priority.classList.toggle('is-important');    
    priority.textContent = priority.classList.contains('is-important') ? 'Важная задача' : 'Обычная задача';
};

const addTask = (taskName, isImportant) => {
    const newTask = document.createElement('li');
    newTask.textContent = taskName;
    if(isImportant){
        newTask.classList.add('is-important');
    }
    list.appendChild(newTask);
}

form.onsubmit = function (evt) {
    evt.preventDefault();
    addTask(input.value, priority.classList.contains('is-important'));
    input.value = '';
};


/*
1. Каждая задача в списке — это элемент li. При отправке формы (переменная form) новая задача добавляется в конец списка (переменная list).
2. Текст задачи берётся из поля ввода (переменная input).
3. Если у переключателя приоритета (переменная priority) есть класс is-important, то новой задаче также добавляется класс is-important.
4. Бонус: после того, как задача добавится в список, поле ввода можно очистить. Но можно не очищать. Подходят оба варианта.
*/
