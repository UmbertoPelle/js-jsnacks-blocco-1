//ex 4 Al click su un bottone, il programma genera un numero casuale tra 1 e 10.
//Se il numero è pari, toglie la classe pari da p#numero.pari.dispari altrimenti toglie la classe dispari.

document.getElementById('btn').addEventListener("click", function(){
  var num = Math.floor(Math.random()*10)+ 1;
  var resto = num % 2;

  dato = document.getElementById("numero");

  dato.classList.add("dispari", "pari");
  if (resto == 1) {
    dato.classList.remove("dispari");
  }else {
    dato.classList.remove("pari");
  }
  dato.innerHTML = num;
})
