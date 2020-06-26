var dato = prompt("numeri 4 cifre");
var somma = 0;

for (var i = 0; i < dato.length; i++) {
  somma += parseInt(dato[i]);
}
console.log(dato);
console.log(somma);
