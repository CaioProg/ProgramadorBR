var numero = 0;

var timer;

function atualizarTexto(){
    let h = document.getElementsByTagName("h1")[0];
    h.innerHTML += " " + numero;
    numero++;
}

function iniciar(){
  
 timer = setTimeout(atualizarTexto, 3000);

}

function parar(){
    clearTimeout(timer);
}