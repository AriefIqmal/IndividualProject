function checker(){
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    var bmi;

    bmi = weight / (height * height);

    let category;

    if (bmi < 18.5) {
        category = ' Underweight';
    } else if (bmi < 24.9) {
        category = ' Normal weight';
    } else if (bmi < 29.9) {
        category = ' Overweight';
    } else {
        category = ' Obese';
    }
    
    document.getElementById("result").innerHTML = "Result is : " + bmi.toFixed(2) + category.toString() ;
}