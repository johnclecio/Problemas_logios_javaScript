function Media() {
  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value);

  let media = (nota1 + nota2) / 2;

  if (media >= 7) {
    document.getElementById("resultado5").innerHTML = "Sua Média é : " + media + "<br> Você está Aprovado.";
  } else {
    document.getElementById("resultado5").innerHTML = "Sua Média é : " + media + "<br> Você está Reprovado.";
  }
}






