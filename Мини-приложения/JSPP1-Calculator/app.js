'use strict'

const inputs = document.querySelectorAll('input');

const performCalculations = (operationId) => {
    const num1 = Number(inputs[0].value);
    const num2 = Number(inputs[1].value);
    inputs[2].value = "";

    if(operationId === "add"){
        inputs[2].value = num1+num2;
    }
    else if(operationId === "subtract"){
         inputs[2].value = num1-num2;
    }
    else if(operationId === "multiply"){
         inputs[2].value = num1*num2;

    }
    else if(operationId === "divide"){
        if(num2 === 0){
            alert('Нельзя делить на 0!');
            return;
        }
        inputs[2].value = num1/num2;
    }
}

const initializeButtons = () => {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach((button) => {
        button.addEventListener('click', (evt) => {
            evt.preventDefault();
            performCalculations(button.id);
        });
    });
}

initializeButtons();

