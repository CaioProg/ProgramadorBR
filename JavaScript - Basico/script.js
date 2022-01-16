var idade = 20;

var maior20 = idade >= 20;
var menor30 = idade <= 30;

var entre = maior20 && menor30;
console.log("&&") 

console.log("Idade:", idade);

console.log("Maior ou igual a vinte ", maior20)

console.log("Menor ou igual a trinta ", menor30)

console.log("Entre 20 e 30", entre)

console.log("----------------------------------")

var idade = 80;

var menor10 = idade <= 10;
var maior65 = idade >= 65;

var gratuidade = menor10 || maior65;
console.log("||") 

console.log("Idade:", idade);

console.log("Maior ou igual a 65 ", maior65)

console.log("Menor ou igual a 10 ", menor10)

console.log("Tem direito a gratuidade?", gratuidade)

console.log("----------------------------------")
console.log("!") 

var idade = 15;

var maior20 = idade >= 20;
var menor20 = !maior20;

console.log("Idade:", idade);

console.log("Maior que vinte", maior20)

console.log("Menor que vinte", menor20)

