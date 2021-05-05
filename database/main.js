// Instrodução ao JavaScript:

/*
var nome = "Gabriel Cordeiro";
var n1 = 7;
var n2 = 3;
var frase = "Vasco é o melhor time do mundo!";

alert(nome + " tem " + idade + " anos!");
alert(idade + idade2);
alert(frase.replace("Vasco", "Brasil"));

console.log(nome);
console.log(n1 * n2);
console.log(frase.toUpperCase());


// Array e Dicionário: 


var lista = ["maça", "pêra", "laranja"];
var fruta = {nome: "maça", cor: "vermelha"}
var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]

lista.push("uva");
lista.pop();

alert(fruta.cor);
alert(frutas[1].nome);

console.log(lista[0]);
console.log(lista.toString());
console.log(lista.join(" - "));
console.log(frutas);


// Condicionais, Laços de repetição e Date:


var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("Maior de idade.");
}else{
    alert("Menor de idade.");
};

var count= 0;
while (count <= 5){
    console.log(count);
    count++;
    alert(count);
}

var count;
for(count=0; count <= 5; count++){
    alert(count);
};

var d = new Date();
alert(d.getDay());
alert(d.getMonth());
alert(d.getFullYear());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getSeconds());

var validar;

function validaIdade(idade) {
  if (idade >= 18) {
    validar = true;
  } else {
    validar = false;
  }
  return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

// Javascript na prática:

function clicou() {
  document.getElementById("agradecimento").innerHTML =
    "<b>Obrigado por clicar!</b>";
  //alert("Obrigado por clicar!");
  //console.log(document.getElementById("agradecimento"))
}

function redirecionar() {
  window.open("https://www.google.com.br/");
  //window.location.href = "https://www.google.com.br/";
}

function trocar(elemento) {
  //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
  elemento.innerHTML = "Obrigado por passar o mouse!";
  //alert("trocar texto");
}

function voltar(elemento) {
  //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
  elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
  alert("página carregada");
}

function funcaoChange(elemento) {
  console.log(elemento.value);
}
