//ex 3 Al click su un bottone, il programma acquisisce tramite prompt un numero.
//Se il numero è positivo, il background di un p#colore diventa verde, se negativo rosso e se zero blu.

document.getElementById('btn').addEventListener("click", function(){
  var colore = document.getElementById('colore');
  var dato = parseInt(prompt ("Dato"));

  if (dato > 0) {
    colore.className = "green"
  }else if (dato == 0) {
    colore.className = "blue"
  }else {
    colore.className = "red"
  }

  colore.innerHTML = dato

});
