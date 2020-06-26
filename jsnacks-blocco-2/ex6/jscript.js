var numeri = parseInt(prompt("quanti numeri dobbiamo calcolare ?"));

var list =document.getElementById("cubo")

for (var i = 0; i < numeri; i++) {
  var cubo = Math.pow(i+1 , 3);
  console.log(cubo);
  list.innerHTML += "<li>" + cubo + "</li>";
}
