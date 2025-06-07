function converter() {
    let number = parseFloat(document.getElementById('number').value);
    const original = document.getElementById("original").value;
    const convert = document.getElementById("convert").value;
    var result;

    if (isNaN(number)) {
        alert("Enter a valid number");
        return; 
    }

    if (original === "cm" && convert === "cm") {
        result = number;
    } else if (original === "cm" && convert === "m") {
        result = number / 100;
    } else if (original === "cm" && convert === "km") {
        result = number / 100000;
    } else if (original === "m" && convert === "cm") {
        result = number * 100;
    } else if (original === "m" && convert === "m") {
        result = number;
    } else if (original === "m" && convert === "km") {
        result = number / 1000;
    } else if (original === "km" && convert === "cm") {
        result = number * 100000;
    } else if (original === "km" && convert === "m") {
        result = number * 1000;
    } else if (original === "km" && convert === "km") {
        result = number;
    } else {
        result = number; // fallback
    }

    document.getElementById("result").innerHTML = "Result is : " + result.toString() + " " + convert;
}
