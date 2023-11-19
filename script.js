let displayValue ='';
let currentOperation = '';
let firstOperand = '';

function appendCharacter(character){
    if (character === '.' && displayValue.includes('.')){
        return;
    }
    
    displayValue += character;
    updateDisplay();
}

function setOperation(operation){
    currentOperation = operation;
    firstOperand = displayValue;
    displayValue = '';
}

function clearDisplay(){
    displayValue = '';
    updateDisplay();
}
function backSpace(){
    displayValue =displayValue.slice(0, -1);
    updateDisplay();
}
function calculateResult(){
    let result;
    const secondOperand = parseFloat(displayValue);

    switch (currentOperation){
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            if (parseFloat(secondOperand) !== 0){
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
            }
            else{
                alert('error: dividing by zero');
                clearDisplay();
                return;
            }
            break;
        default:
            alert('Invalid transaction');
            clearDisplay();
            return;
    }
    displayValue = result.toString();
    updateDisplay();
    currentOperation = '';
}

function updateDisplay(){
    document.getElementById('display').value = displayValue;
}