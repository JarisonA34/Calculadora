const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const operacion = document.querySelector('#operacion');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');
let total = 0;

boton.addEventListener('click', (e) => {
    e.preventDefault();

    if (num1.value.trim() === '' || num2.value.trim() === '') {
        alert('Debes llenar ambos campos');
        return;
    }
    
    if (operacion.value === 'sumar') {
        total = parseFloat(num1.value) + parseFloat(num2.value);
    }
    else if (operacion.value === 'restar') {
        total = parseFloat(num1.value) - parseFloat(num2.value);
    }
    else if (operacion.value === 'multiplicar'){
        total = parseFloat(num1.value) * parseFloat(num2.value);
    }
    else if (operacion.value === 'dividir'){
        if (parseFloat(num2.value) === 0) {
            alert('No se puede dividir entre 0');
            return;
        }
        total = parseFloat(num1.value) / parseFloat(num2.value);
    }

    resultado.innerHTML = total;
    num1.value = '';
    num2.value = '';
    total = 0;
});