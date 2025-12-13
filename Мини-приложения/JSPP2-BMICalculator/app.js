'use strict'

const button = document.querySelector('button');

const inputBlocks = document.querySelectorAll('.input-block')
const inputs = document.querySelectorAll('input');
const resultDiv = document.querySelector('.hidden')
const toggleHiddenOn = [...inputBlocks, resultDiv]

const resultTexts = [resultDiv.childNodes[1],  resultDiv.childNodes[3]];

const norms = {
    male: [
        20,
        25,
        30,
        40
    ],
    female: [
        19,
        24,
        30,
        40
    ]
};


let lastResult = '';

const colors = {
    negative: [
        'negative-result', 'button-negative-result'
    ],
    mid: [
        'mid-result', 'button-mid-result'
    ],
    positive: [
        'positive-result', 'button-positive-result'
    ]
}


button.addEventListener('click', (evt) => {    
    if(lastResult === ''){
        const age = Number(inputs[0].value);
        const height = Number(inputs[1].value);
        const weight = Number(inputs[2].value);
        const gender = inputs[3].checked ? 'male' : 'female';
        
        console.log(`${age}, ${height}, ${weight}, ${gender}`);
        if(age === 0 || height === 0 || weight === 0){
            alert('Заполните все поля');
            return;
        }
        calculateBMI(age, height, weight, gender);
    }
    else{
        document.body.classList.toggle(colors[lastResult][0]);
        button.classList.toggle(colors[lastResult][1]);
        button.textContent = 'Рассчитать';
        lastResult = '';
    }
    toggleHiddens();
})

const toggleHiddens = () => {
    toggleHiddenOn.forEach(element => {
            element.classList.toggle('hidden');
        });
}

const calculateBMI = (age, height, weight, gender) => {
    

    const bmi = Math.floor(weight / Math.pow((height/100),2));
    const normIncrease = age < 20 ? 0 : Math.floor((age - 20) / 10); 
    
    const genderedNorms = norms[gender];
    let outputText = '';

    resultTexts[0].textContent = 'Ваш ИМТ: ' + bmi;

    if(bmi < genderedNorms[0] + normIncrease){
        outputText = 'У вас недостаточный вес!'
        lastResult = 'negative';
    }
    else if(bmi >= genderedNorms[0] + normIncrease && bmi < genderedNorms[1] + normIncrease){
        outputText = 'Ваш вес в пределах нормы!'
        lastResult = 'positive';
    }
    else if(bmi >= genderedNorms[1] + normIncrease && bmi < genderedNorms[2] + normIncrease){
        outputText = 'У вас избыточный вес!'
        lastResult = 'mid';
    }
    else if(bmi >= genderedNorms[2] + normIncrease && bmi < genderedNorms[3] + normIncrease){
        outputText = 'У вас склонность к ожирению!'
        lastResult = 'negative';
    }
    else if(bmi >= genderedNorms[3] + normIncrease){
        outputText = 'У вас сильное ожирение!'
        lastResult = 'negative';
    }

    document.body.classList.toggle(colors[lastResult][0]);
    button.classList.toggle(colors[lastResult][1]);
    button.textContent = 'Еще раз';
    resultTexts[1].textContent = outputText;
}

