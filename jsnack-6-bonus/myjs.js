/*
Nella pagina c'è un bottone#lanciaMoneta.
Al click su un bottone, il programma genera un numero casuale (tra 0 e 9).
Se il numero è pari mostra un img con la testa della moneta.
Se è dispari mostra un'altra img con la croce della moneta.
*/

document.getElementById('btn').addEventListener("click", function(){
  var num = Math.floor(Math.random()*10)+ 1;
  var resto = num % 2;
  var testa = document.getElementById('testa');
  var croce = document.getElementById('croce');

  testa.className = "hidden";
  croce.className = "hidden";

  if (resto == 1) {
    croce.className = "show";
    alert("Croce");
  }else {
    testa.className = "show" ;
    alert("Testa");
  }

})
