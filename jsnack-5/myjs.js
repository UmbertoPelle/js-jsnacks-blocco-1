//ex 5 Nella pagina ci sono due input(num1, num2) e una select con options(somma,sottrai,moltiplica,dividi).
//Al click su un bottone, il programma inserisce in un p#result il risultato dell'operazione scelta.

document.getElementById('btn').addEventListener("click", function(){
  var primoDato = document.getElementById("primoDato").value;
  var secondoDato = document.getElementById("secondoDato").value;
  var operazione = document.getElementById("operazioni").value;
  var risultato =document.getElementById("risultato");

  if (operazione == ""){
    risultato.innerHTML="Scegli un operazione"
  }else if (operazione == "1") {
    risultato.innerHTML= parseInt(primoDato) + parseInt(secondoDato);
  }else if (operazione == "2") {
    risultato.innerHTML= parseInt(primoDato) - parseInt(secondoDato);
  }else if (operazione == "3") {
    risultato.innerHTML= parseInt(primoDato) * parseInt(secondoDato);
  } else {
    if (secondoDato == 0) {
      risultato.innerHTML="Il secondo dato inserito non è valido"
    }else {
      risultato.innerHTML= parseInt(primoDato) / parseInt(secondoDato);
    }
  }

});
