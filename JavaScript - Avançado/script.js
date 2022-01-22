
function loaded() {
    let t = document.getElementById("titulo");
   // t.onclick = mudarText;
   t.addEventListener("mouseover", mudarText)
   t.addEventListener("mouseout", mouseout)
}

function mudarText() {
    this.innerHTML = "NOVO TEXTO";
}

function mouseout() {
    this.innerHTML = "Mouse fora do elemento";
}