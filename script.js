let displayNum = '';
let operador = null;
let firstNum = null;

function mostrarNum(number) {
    displayNum += number;
    document.getElementById('display').value = displayNum;
}

function limpar() {
    displayNum = '';
    document.getElementById('display').value = displayNum;
    operador = null;
    firstNum = null;
}

function operacao(operation) {
    operador = operation;
    firstNum = Number(displayNum);
    displayNum = '';
    document.getElementById('display').value = displayNum;
}

function calcular() {
    let secNum = Number(displayNum);
    let result;

    if (operador === '/') {
        if (secNum === 0) {
            alert('Impossível dividir por 0');
            limpar();
            return;
        }
        result = firstNum / secNum;
    } else if (operador === '*') {
        result = firstNum * secNum;
    } else if (operador === '-') {
        result = firstNum - secNum;
    } else if (operador === '+') {
        result = firstNum + secNum;
    }

    displayNum = String(result);
    document.getElementById('display').value = displayNum;
}
