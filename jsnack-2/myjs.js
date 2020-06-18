//ex 2 nome e cognome e al click un consol log con nome e cognome

var btnClick = document.getElementById('btn');

btnClick.addEventListener("click", function(){
  var nome = document.getElementById('nome').value;
  var cognome = document.getElementById('cognome').value;
  console.log(nome + " " + cognome);
  document.getElementById('nome').value = "";
  document.getElementById('cognome').value = "";
});
