function calculateSum(a, b) {
  return a + b;
}

function calculateSubtractionAB(a, b) {
  return a - b;
}

function calculateSubtractionBA(a, b) {
  return b - a;
}

function calculateMultiplication(a, b) {
  return a * b;
}

function calculateDivisionAB(a, b) {
  return a / b;
}

function calculateDivisionBA(a, b) {
  return b / a;
}

function calculatePowerBA(a, b) {
  return Math.pow(b, a);
}

function calculatePowerAB(a, b) {
  return Math.pow(a, b);
}

function calculateSquareRoot(x) {
  return Math.sqrt(x).toFixed(3);
}

function calculateFactorial(x) {
  var resultado = 1;
  var i = x;
  while (i > 0) {
    resultado = i * resultado;
    i--;
  }
  return resultado;
}

function calculateAverage(a, b) {
  return (a + b) / 2;
}
const calculate = () => {
  console.log('foi');
  let inputA = parseFloat(document.getElementById('A').value);
  let inputB = parseFloat(document.getElementById('B').value);

  sum.innerHTML = calculateSum(inputA, inputB);
  subtractionAB.innerHTML = calculateSubtractionAB(inputA, inputB);
  subtractionBA.innerHTML = calculateSubtractionBA(inputA, inputB);

  multiplication.innerHTML = calculateMultiplication(inputA, inputB);
  divisionAB.innerHTML = calculateDivisionAB(inputA, inputB).toFixed(2);
  divisionBA.innerHTML = calculateDivisionBA(inputA, inputB).toFixed(2);

  powerBA.innerHTML = calculatePowerBA(inputA, inputB);
  powerAB.innerHTML = calculatePowerAB(inputA, inputB);
  squareRootA.innerHTML = calculateSquareRoot(inputA);

  squareRootB.innerHTML = calculateSquareRoot(inputB);
  factorialA.innerHTML = calculateFactorial(inputA);
  factorialB.innerHTML = calculateFactorial(inputB);

  percentageAB.innerHTML =
    (calculateDivisionAB(inputA, inputB) * 100).toFixed(0) + '%';
  percentageBA.innerHTML =
    (calculateDivisionBA(inputA, inputB) * 100).toFixed(0) + '%';
  average.innerHTML = calculateAverage(inputA, inputB).toFixed(1);
};
