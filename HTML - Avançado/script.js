let lista = document.getElementById("lista");

lista.dataset.n = '10';

let id = parseInt(lista.dataset.id);
console.log(id);

let num = (lista.dataset.n);

let conteudo = "";

for (let i = 0; i < num; i++) {

    conteudo += "<li>" + i + "</li>";

}

lista.innerHTML = conteudo;
