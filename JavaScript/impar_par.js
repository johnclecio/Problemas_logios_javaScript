function NumparImpar() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const n1 = num1 % 2 === 0 ? 'par' : 'ímpar';
  const n2 = num2 % 2 === 0 ? 'par' : 'ímpar';
  const output = document.getElementById("output");
  output.innerHTML = `Número ${num1} é ${n1}<br>Número ${num2} é ${n2}`;
}