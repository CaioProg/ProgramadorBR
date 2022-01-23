let a = {
    nome: "Caio",
    nota: "5.5"
}
let b = JSON.stringify(a);

let a2 = '{"nome": "Maria", "nota":7.8}';

let b2 = JSON.parse(a2);

console.log(a);
console.log(b);


console.log(a2);
console.log(b2);

console.log(b2.nota);
console.log(b2.nome);