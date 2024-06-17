const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const operacion = document.querySelector('#operacion');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');
let total;

boton.addEventListener('click', (e) => {
    e.preventDefault();

    if (num1.value.trim() === '' || num2.value.trim() === '') {
        alert('Debes llenar ambos campos');
        return;
    }
    
    if (operacion.value === 'sumar') {
        total = parseInt(num1.value) + parseInt(num2.value);
    }
    else if (operacion.value === 'restar') {
        total = parseInt(num1.value) - parseInt(num2.value);
    }
    else if (operacion.value === 'multiplicar'){
        total = parseInt(num1.value) * parseInt(num2.value);
    }
    else if (operacion.value === 'dividir'){
        if (parseInt(num2.value) === 0) {
            alert('No se puede dividir entre 0');
            return;
        }
        total = parseInt(num1.value) / parseInt(num2.value);
    }

    resultado.innerHTML = total;
    num1.value = '';
    num2.value = '';
});