'use strict';

const commentTemplate = document.createElement('li');
commentTemplate.classList.add('user-comment');

const commentHolder = document.querySelector('.comment-list');

const commentInput = document.querySelector('.comment-field');
const commentForm = document.querySelector('.comment-form');

const addComment = text => {
    const newComment = commentTemplate.cloneNode(false);
    newComment.textContent = text;
    commentHolder.appendChild(newComment);
}

commentForm.onsubmit = (evt) =>{
    evt.preventDefault();
    addComment(commentInput.value);
    commentInput.value = '';
}