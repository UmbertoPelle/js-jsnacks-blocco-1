var quanti = parseInt(prompt("di quanti numeri dobbiamo fare la somma e la media ?"));
var somma=0;

for (var i = 0; i < quanti; i++) {
  somma += parseInt(prompt("dammi un numero:"));
}

console.log(somma);
console.log(somma/quanti);
