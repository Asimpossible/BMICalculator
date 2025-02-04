function calculationBMI(event) {
  event.preventDefault();

  let weight = Number(document.querySelector(".weight").value);
  let height = Number(document.querySelector(".height").value);

  height = height / 100;
  let bmi = (weight / Math.pow(height, 2)).toFixed(2);
  let resultText = `Result is: ${bmi}`;

  if (bmi < 18.5) {
    resultText += `<span> <strong>Underweight</strong></span>`;
  } else if (bmi < 24.9) {
    resultText += `<span> <strong> Normal Weight</strong></span>`;
  } else if (bmi < 29.9) {
    resultText += `<span> <strong>Overweight</strong></span>`;
  } else {
    resultText += `<span> <strong>Obese</strong></span>`;
  }
  document.querySelector(".result").innerHTML = resultText;
}
