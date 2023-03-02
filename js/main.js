'use strict';

function myCreateElement(myCase, htmlElement, myClass, text) {
    const container = document.querySelector(myCase);
    const element = document.createElement(htmlElement);

    element.classList.add(myClass);
    container.append(element);
    element.append(text);

    return element;
}

const inputButton = document.querySelector('.play');
inputButton.addEventListener('click', function () {

    let container = document.querySelector('.container');
    container.innerHTML = '';

    for (let i = 1; i <= 100; i++) {

        myCreateElement('.container', 'div', 'cell', i);

    }
    
    let inputCell = document.querySelectorAll('.cell');
    inputCell.forEach(function(elem) {
        elem.addEventListener('click', function () {
        elem.classList.add('cell-click');
        console.log(elem.innerHTML)
    })
    })
    


})



