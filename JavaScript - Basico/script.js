function criarAluno(nome, n1, n2){
  return {
      nome: nome,
      nota1: n1,
      nota2: n2,
      media: function(){
        return(this.nota1 + this.nota2) /2;
      }
  }

}

function aluno(nome, n1, n2){

  this.nome = nome;
  this.nota1 = n1;
  this.nota2 = n2;
  
  this.media = function media(){
    return (this.nota1 + this.nota2) / 2;
  }
}

var a = new aluno("caio", 8, 7)
console.log(a)
var turma = [
  criarAluno("Caio", 9, 5),
  criarAluno("Joao", 9, 5),
  criarAluno("Maria", 8, 5)
]

var aluno = turma[0];

turma.forEach( function(elemento){

  console.log(elemento)
} )