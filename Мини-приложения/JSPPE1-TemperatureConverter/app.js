const input = document.querySelector('input');
    
const output = document.querySelector('.conversion-container h1');
const warning = document.querySelector('.conversion-container h2');

input.addEventListener('input', (newInput) => {
    // output.textContent = Number(newInput.data) * 9 / 5 + 32;
    let result = Number(newInput.data) * 9 / 5 + 32;
    if(isNaN(result)){
        output.textContent = "Введите валидное число";
        output.classList.add('hidden');
        warning.classList.remove('hidden');
        return;
    }
    output.classList.remove('hidden');
    warning.classList.add('hidden');

    if(String(result).indexOf('.') === -1){
        result += '.0';
    }
    output.textContent = result;
    
})