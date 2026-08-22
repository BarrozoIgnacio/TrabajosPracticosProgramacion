let ej1 = document.querySelector('#ej1')
let botonEj1 = document.querySelector('#botonEj1')
let inputEj1 = document.querySelector('#inputEj1')
let edad = 0

botonEj1.onclick = function() {
edad = inputEj1.value

    if (edad >= 18) {
        ej1.textContent = 'Sos mayor de edad'
    } else {
        ej1.textContent = 'Sos menor de edad'
    }
}
