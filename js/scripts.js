'use strict';

document.addEventListener('DOMContentLoaded', function () {
    console.log('Content Loaded');
    const myList = document.querySelector('#myList');
    const generateList = document.querySelector('#generateList');

    generateList.addEventListener('click', function () {
        const inputItems = document.querySelectorAll('input');
        const listElement = document.createElement('ul');

        inputItems.forEach(function program(inputItem) {
            const listItem = document.createElement('li');
            listItem.innerText = inputItems.value;
            listElement.appendChild(inputItem);
        });
        myList.append(listElement);
    });
});
