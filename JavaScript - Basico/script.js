
var numero = Math.random() * 100;

for (var i = 1; i < 5; i++) {

  console.log("Executando o for, pela " + i + " vez" );
}

while (numero < 90) {
  console.log(numero);
  numero = Math.random() * 100
}

console.log(numero);

console.log("Acabou!")