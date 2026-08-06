//Ejercicio 1
let edadCliente = 18;

let boton1 = document.querySelector("#boton1");

boton1.onclick = function() {

    if (edadCliente >= 18) {
        document.querySelector("#parrafo1").textContent = "Eres mayor de edad.";
    } else {
        document.querySelector("#parrafo1").textContent = "Eres menor de edad.";
    }

};

//Ejercicio 2
let nombreUsuario = "Nahuel";

let boton2 = document.querySelector("#boton2");
let parrafo2 = document.querySelector("#parrafo2");

boton2.onclick = verificarNombre;

function verificarNombre() {
    if (nombreUsuario === "Nahuel") {
        parrafo2.textContent = "Bienvenido Nahuel ¿como estas?";
    } else {
        parrafo2.textContent = "Bienvenido usuario";
    }
}