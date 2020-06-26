var nomeUno = prompt("primo nome");
var nomeDue = prompt("secondo nome");

if ( nomeUno.length >  nomeDue.length) {
  console.log(nomeDue);
  console.log(nomeUno);
}else if (nomeUno.length <  nomeDue.length) {
  console.log(nomeUno);
  console.log(nomeDue);

}else {
  console.log("sono uguali");
}
