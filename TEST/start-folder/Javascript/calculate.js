const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorSelect = document.getElementById('operator');
const formulaDiv = document.getElementById('formula');
const resultDiv = document.getElementById('result');

num1Input.addEventListener('input', updateFormula);
num2Input.addEventListener('input', updateFormula);
operatorSelect.addEventListener('change', updateFormula);

function updateFormula() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operator = operatorSelect.value;

    if (isNaN(num1) || isNaN(num2)) {
        formulaDiv.textContent = '計算式: ';
        resultDiv.textContent = '両方の数値を入力してください。';
        return;
    }

    let result;
    let symbol;

    if (operator === 'addition') {
        result = num1 + num2;
        symbol = '＋';
    } else if (operator === 'subtraction') {
        result = num1 - num2;
        symbol = '－';
    } else if (operator === 'multiplication') {
        result = num1 * num2;
        symbol = '×';
    } else if (operator === 'division') {
        if (num2 === 0) {
            formulaDiv.textContent = '計算式: ';
            resultDiv.textContent = '0で割ることはできません。';
            return;
        }
        result = num1 / num2;
        symbol = '÷';
    } else {
        formulaDiv.textContent = '計算式: ';
        resultDiv.textContent = '演算子が選択されていません。';
        return;
    }

    formulaDiv.textContent = `計算式: ${num1} ${symbol} ${num2}`;
    resultDiv.textContent = `結果: ${result}`;
}