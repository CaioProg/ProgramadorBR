var nota1 = 6.0;
var nota2 = 8.8;

var media = (nota1 + nota2) / 2;
var conceito = "";

if (media >= 8) {

  conceito = "Ótimo";
  
}
else if( media >= 6.5) {

  conceito = "Bom";

} else {

  conceito = "Regular";

}

console.log(media);
console.log(conceito);

switch(conceito){

  case "Ótimo":
    console.log("Parabéns, você é um ótimo aluno!")
    break;
  case "Bom":
    console.log("Parabéns, você é quase perfeito!")
    break;

  case "Regular":
    console.log("Estude mais um pouco!")
    break;

  default:
    console.log("Houve algum erro ://")
    break;
}