function calculateTax() {
    let income = parseFloat(document.getElementById("Income").value);
    var tax;

    if (income <= 5000) {
        tax = 0;
      } else if (income <= 20000) {
        tax = (income - 5000) * 0.01;
      } else if (income <= 35000) {
        tax = 150 + (income - 20000) * 0.03;
      } else if (income <= 50000) {
        tax = 600 + (income - 35000) * 0.08;
      } else if (income <= 70000) {
        tax = 1800 + (income - 50000) * 0.13;
      } else if (income <= 100000) {
        tax = 4400 + (income - 70000) * 0.21;
      } else if (income <= 250000) {
        tax = 10700 + (income - 100000) * 0.24;
      } else if (income <= 400000) {
        tax = 46700 + (income - 250000) * 0.245;
      } else if (income <= 600000) {
        tax = 83750 + (income - 400000) * 0.25;
      } else if (income <= 1000000) {
        tax = 133750 + (income - 600000) * 0.26;
      } else if (income <= 2000000) {
        tax = 237450 + (income - 1000000) * 0.28;
      } else {
        tax = 517450 + (income - 2000000) * 0.30;
      }

      document.getElementById("result").innerHTML = "Result is : RM " + tax.toString() ;
}