let puntos = 0;
let multiplicador = 1;
let costo = 20;

let puntaje = document.querySelector("#puntaje");
let click = document.querySelector("#click");
let multiplicar = document.querySelector("#multiplicar");

click.onclick = function() {
    puntos = puntos + multiplicador;

    puntaje.textContent = "Puntaje: " + puntos;

    if (puntos >= 30) {
        puntaje.style.color = "red";
    } else if (puntos >= 20) {
        puntaje.style.color = "blue";
    } else if (puntos >= 10) {
        puntaje.style.color = "green";
    }
};

multiplicar.onclick = function() {
    if (puntos >= costo) {
        puntos = puntos - costo;
        multiplicador = multiplicador * 2;

        puntaje.textContent = "Puntaje: " + puntos;
    }
};