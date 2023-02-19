function converter(moedaOrigem, moedaDestino) {
  // Obtém os valores de entrada
  var valorOrigem = document.getElementById(moedaOrigem === 'real' ? 'valorA' : 'valorB').value;

  // Valida o valor de entrada
  if (isNaN(valorOrigem) || valorOrigem === '') {
    alert('Por favor, insira um valor numérico válido.');
    return;
  }

  // Realiza o cálculo da conversão
  var taxaDeCambio = moedaOrigem === 'real' ? 1 / 5.32 : 5.32;
  var valorDestino = parseFloat((valorOrigem * taxaDeCambio).toFixed(2));

  // Exibe o resultado da conversão
  var resultado = document.getElementById('resultado');
  resultado.innerHTML = 'Valor em ' + (moedaDestino === 'real' ? 'Real' : 'Dólar') + ': ' + valorDestino;
  resultado.style.display = 'block';
}