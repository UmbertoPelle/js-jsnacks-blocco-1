var numeri = [];

for (var i = 0; i < 6; i++) {
  var dato = parseInt(prompt("Dammi un numero"));
  if (dato%2 == 1) {
    numeri.push(dato);
  }
}
console.log(numeri);
