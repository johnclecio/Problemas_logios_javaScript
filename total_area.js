function TotaldaArea() {
  let l = parseFloat(document.getElementById("l").value);
  let a = parseFloat(document.getElementById("a").value);

  let area = l * a;

  document.getElementById("resultado4").innerHTML = "Área Total: " + area;
}
