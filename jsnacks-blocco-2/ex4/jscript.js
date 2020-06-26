var invitati = ["marco", "giulio", "ale"];

var utente =prompt("Sei invitato?");
var conferma = false;

for (var i = 0; i < invitati.length ; i++) {
  if (utente === invitati[i]) {
    conferma = true;
  }
}

if (conferma===true) {
  console.log("sei invitato");
}else {
  console.log("non sei invitato");
}
