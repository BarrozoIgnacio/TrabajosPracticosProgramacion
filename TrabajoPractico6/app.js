
let parrafo = document.querySelector("#parrafo");
let btnFondo = document.querySelector("#btnFondo");
let btnTexto = document.querySelector("#btnTexto");
let btnColor = document.querySelector("#btnColor");
let btnLetra = document.querySelector("#btnLetra");
let btnTamano = document.querySelector("#btnTamano");
let btnReiniciar = document.querySelector("#btnReiniciar");
let textoOriginal = "Este parrafo puede ser modificado.";
let colorTextoOriginal = "black";
let colorFondoOriginal = "white";
let fuenteOriginal = "Arial";
let tamanoOriginal = "20px";

btnFondo.onclick = function () {
    parrafo.style.backgroundColor = "blue";
};

btnTexto.onclick = function () {
    parrafo.textContent = "Cambiaste el texto";
};

btnColor.onclick = function () {
    parrafo.style.color = "red";
};

btnLetra.onclick = function () {
    parrafo.style.fontFamily = "Impact";
};

btnTamaño.onclick = function () {
    parrafo.style.fontSize = "30px";
};

btnReiniciar.onclick = function () {
    parrafo.textContent = textoOriginal;
    parrafo.style.color = colorTextoOriginal;
    parrafo.style.backgroundColor = colorFondoOriginal;
    parrafo.style.fontFamily = fuenteOriginal;
    parrafo.style.fontSize = tamañoOriginal;
};