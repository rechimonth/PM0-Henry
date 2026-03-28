import { chequearLongitud, generarContrasena } from "./funciones.js";

document.getElementById("formGenerator").addEventListener("submit", function(event) {
    event.preventDefault();

    let inputLongitud = document.getElementById("caracteres");
    let longitud = chequearLongitud(inputLongitud.value);
    
    if (typeof longitud === "number") {
        let incluirNumeros = document.getElementById("numeros").checked;
        let incluirEspeciales = document.getElementById("especiales").checked;
        let incluirMayusculas = document.getElementById("mayusculas").checked;

        let contrasenaGenerada = generarContrasena(longitud, incluirNumeros, incluirEspeciales, incluirMayusculas);
        
        let outputContrasena = document.getElementById("resultadoContrasena");
        outputContrasena.innerHTML = `<p>Contraseña generada: <strong>${contrasenaGenerada}</strong></p>`;
        outputContrasena.classList.add("mostrar");
    }
    
    inputLongitud.value = "";
    

});