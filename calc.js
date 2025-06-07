function calculate() {
    let Num1 = parseFloat(document.getElementById("num1").value);
    let Num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let result = '';

    if (isNaN(Num1) || isNaN(Num2)) {
        alert(`Please enter a valid number`);
        return;
    }

    switch (operation) {
        case 'add':
            result = Num1 + Num2;
            break;

        case 'subtract':
            result = Num1 - Num2;
            break;

        case 'multiply':
            result = Num1 * Num2;
            break;

        case 'divide':
            if (Num2 === 0) {
                alert(`Cannot divide by 0`);
                return;
            }
            result = Num1 / Num2;
            break;
        default:
            alert("Invalid operation");
            return;
    }

    document.getElementById("result").innerHTML = "Result is : " + result.toString();
}

function clearField() {
      document.getElementById('num1').value = "";
      document.getElementById('num2').value = "";
      document.getElementById('result').value = "";
    }
