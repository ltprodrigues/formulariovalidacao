const form = document.getElementById('form-calcule');

function validarFormulario() {
    var firstNumber = parseFloat(document.getElementById('firstNumber').value);
    var secondNumber = parseFloat(document.getElementById('secondNumber').value);

    if(secondNumber < firstNumber){
        alert('Invalido! Segundo numero deve ser maior que o primeiro');
    }else{
        alert('Valido! O segundo numero eh maior que o primeiro.');
    }
}