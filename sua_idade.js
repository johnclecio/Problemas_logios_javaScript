function Ano() {
  let idade = parseFloat(document.getElementById("ano").value);
  let ano = 2023 - idade;
  let resultado = document.getElementById('resultado3');
  resultado.innerHTML = 'Sua idade é: ' + ano;
}