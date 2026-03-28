export function chequearLongitud(longitud) {
  if (!longitud) return "Debe ingresar la longitud";
  
  if (typeof longitud !== "string") return "La longitud recibida no es valida";
  

  let longitudNumero = parseInt(longitud, 10);

  if (isNaN(longitudNumero)) return "La longitud debe ser un número";
  
  if (longitudNumero < 3) return "La longitud debe ser mayor o igual a 3";
  
  if (longitudNumero > 10) return "La longitud debe ser menor o igual a 10";
  

  return longitudNumero;
};

export function generarContrasena(longitud, incluirNumeros, incluirEspeciales, incluirMayusculas) {
  let letras = "abcdefghijklmnñopqrstuvwxyz";
  let numeros = "1234567890";
  let caracteresEspeciales = "!@#$%^&*()-_=+[]{}|;:',.<>?/";
  let letrasMayusculas = letras.toUpperCase();
  let caracteresDisponibles = letras;

  if (incluirEspeciales) caracteresDisponibles += caracteresEspeciales;

  if (incluirNumeros) caracteresDisponibles += numeros;

  if (incluirMayusculas) caracteresDisponibles += letrasMayusculas;

  let contrasena = "";

  if (longitud >= 3 && longitud <= 10) {
    for (let i = 0; i < longitud; i++) {
      let valorAleatorio = Math.floor(Math.random() * caracteresDisponibles.length);
      let indice = valorAleatorio;
      let caracter = caracteresDisponibles[indice];
      contrasena += caracter;
    }
    return contrasena;
  }

}