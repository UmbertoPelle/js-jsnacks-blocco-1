var numeri = [];
var somma = 0;

for (var i = 0; i < 5; i++) {
  var dato = parseInt(prompt("inserisci un numero: "));
  numeri.push(dato);
  somma += numeri[i];
}
// var c = 0;
// while (c < 5) {
//   var dato = parseInt(prompt("inserisci un numero: "));
//   numeri.push(dato);
//   somma += numeri[c];
//   c++
// }



console.log(numeri);
console.log(somma);
