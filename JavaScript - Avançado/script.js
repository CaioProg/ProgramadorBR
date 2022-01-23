// let a = {
//    nome: "Caio", n1: 7.3
// }

// localStorage.setItem("aluno", JSON.stringify(a));

let a = localStorage.getItem("aluno");
console.log(JSON.parse(a));

localStorage.clear();