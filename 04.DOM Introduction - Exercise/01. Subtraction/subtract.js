function subtract() {
   let firstNum =  document.getElementById('firstNumber').value;
   let secondNum = document.getElementById('secondNumber').value;
   let div = document.getElementById('result');
   div.textContent = Number(firstNum) - Number(secondNum);     
}