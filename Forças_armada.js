function MinhaIdade(){
    let nome = document.getElementById("nome").value;
    let idade = parseFloat(document.getElementById("idade").value);

  // Define a message to display
    let message = " ";
    if (idade >=18){
        message = "Você está apto ao Serviço Militar";
    } else {
        message = "Você não está apto ao Serviço militar, tente novamente.";
    }

    // Exibe o resultado da conversão
    var resultado = document.getElementById('resultado1');
    resultado.innerHTML = 'Nome: ' + nome + '<br>Idade: ' + idade + '<br>' + message;
    resultado.style.display = 'block';
}




