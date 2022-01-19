function calcMedia(){
  return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = { 
              nome: "Caio", 
              notas: [5, 6],
              
              media: calcMedia
            }

var aluno1 = { 
              nome: "João", 
              notas: [10, 6],
              
              media: calcMedia
            }



console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());