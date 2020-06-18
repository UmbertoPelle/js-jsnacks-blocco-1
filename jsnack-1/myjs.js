//ex 1 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
var primoDato;
var secondoDato;

primoDato = parseInt(prompt ("Primo dato"), 10);
secondoDato = parseInt(prompt ("Secondo dato"), 10);


if (primoDato > secondoDato) {
  document.getElementById('risultato').innerHTML= primoDato;
} else if (primoDato === secondoDato) {
  document.getElementById('risultato').innerHTML= "i dati sono uguali";
} else {
  document.getElementById('risultato').innerHTML= secondoDato;
}
