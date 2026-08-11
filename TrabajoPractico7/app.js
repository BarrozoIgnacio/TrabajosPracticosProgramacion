// EJERCICIO 1
let edad = 18;
let parrafo1 = document.querySelector("#parrafo1");
let boton1 = document.querySelector("#boton1");

boton1.onclick = function() {
    if (edad >= 18) {
        parrafo1.textContent = "Eres mayor de edad";
    } else {
        parrafo1.textContent = "Eres menor de edad";
    }
};

// EJERCICIO 2
let nombreUsuario = "Nahuel";
let parrafo2 = document.querySelector("#parrafo2");
let boton2 = document.querySelector("#boton2");

boton2.onclick = function() {
    if (nombreUsuario == "Nahuel") {
        parrafo2.textContent = "Hola Nahuel! Que bueno verte";
    } else {
        parrafo2.textContent = "Bienvenido usuario";
    }
};


// EJERCICIO 3
let nombreUsuario2 = "Marcos";
let parrafo3 = document.querySelector("#parrafo3");
let boton3 = document.querySelector("#boton3");

boton3.onclick = function() {
    if (nombreUsuario2 == "Nahuel" || nombreUsuario2 == "Marcos") {
        parrafo3.textContent = "Bienvenido " + nombreUsuario2 + ", como estas?";
    } else {
        parrafo3.textContent = "Bienvenido " + nombreUsuario2;
    }
};

// EJERCICIO 4
let numero = 5;
let parrafo4 = document.querySelector("#parrafo4");
let boton4 = document.querySelector("#boton4");

boton4.onclick = function() {
    if (numero > 0) {
        parrafo4.textContent = "El numero esta por encima de cero";
    } else if (numero < 0) {
        parrafo4.textContent = "El numero esta por debajo de cero";
    } else {
        parrafo4.textContent = "El numero es cero";
    }
};

// EJERCICIO 5
let edad2 = 15;
let parrafo5 = document.querySelector("#parrafo5");
let boton5 = document.querySelector("#boton5");

boton5.onclick = function() {
    if (edad2 >= 6 && edad2 <= 11) {
        parrafo5.textContent = "Niño";
    } else if (edad2 >= 12 && edad2 <= 18) {
        parrafo5.textContent = "Adolescente";
    } else if (edad2 >= 19 && edad2 <= 26) {
        parrafo5.textContent = "Joven";
    } else if (edad2 >= 27 && edad2 <= 59) {
        parrafo5.textContent = "Adulto";
    } else if (edad2 >= 60) {
        parrafo5.textContent = "Anciano";
    }
};

// EJERCICIO 6
let dia = "sabado";
let parrafo6 = document.querySelector("#parrafo6");
let boton6 = document.querySelector("#boton6");

boton6.onclick = function() {
    if (dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "jueves" || dia == "viernes") {
        parrafo6.textContent = "Es un dia laborable";
    } else if (dia == "sabado" || dia == "domingo") {
        parrafo6.textContent = "Es fin de semana";
    }
};

// EJERCICIO 7
let contraseña = "1234";
let parrafo7 = document.querySelector("#parrafo7");
let boton7 = document.querySelector("#boton7");

boton7.onclick = function() {
    if (contraseña == "1234") {
        parrafo7.textContent = "La contraseña es correcta";
    } else {
        parrafo7.textContent = "La contraseña es incorrecta";
    }
};