'use strict';

const messageTemplate = document.querySelector('#message-template').content.querySelector('.chat-message');
const chatForm = document.querySelector('.chat-form');
const chatInput = document.querySelector('.chat-form-input');
const chatContent = document.querySelector('.chat-content');

const addMessage = text => {
    const newMessage = messageTemplate.cloneNode(true);
    chatContent.appendChild(newMessage);

    const messageText = newMessage.querySelector('.chat-message-text');
    messageText.textContent = text;
    newMessage.appendChild(messageText);

    const deleteButton = newMessage.querySelector('.chat-message-button');
    deleteButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        newMessage.remove();
    })
}

chatForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    addMessage(chatInput.value);
    chatInput.value = '';
});

