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

    const inputChallenge = document.querySelector('#challenge').value;
    let range = 0;
    console.log(inputChallenge);
    if (inputChallenge === 'easy') {
        range = 100;
        numberCell(range, 'cell-100');
    }
    else if (inputChallenge === 'normal') {
        range = 81;
        numberCell(range, 'cell-91');
    }
    else {
        range = 49;
        numberCell(range, 'cell-49');
    }
    console.log(range)

    function numberCell(numCell, nameClass) {
        let container = document.querySelector('.container');
        container.innerHTML = '';

        for (let i = 1; i <= numCell; i++) {
            myCreateElement('.container', 'div', nameClass, i);

        }

        let inputCell = document.querySelectorAll(`.${nameClass}`);
        inputCell.forEach(function (elem) {
            elem.addEventListener('click', function () {
                elem.classList.add('cell-click');
                console.log(elem.innerHTML)
            })
        })
    }

})



