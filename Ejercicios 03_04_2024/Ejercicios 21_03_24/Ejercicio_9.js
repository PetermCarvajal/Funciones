//Palindromo
alert("Buenos Días Bienvenido Al Programa De Validación Para Saber Si Un Número es Palindromico");
let valor = parseInt(prompt("¿Qué Número Deseas Validar Si Es Palindromico?"));
function palindromico(numero) {
    let numeroTexto=numero.toString()
    let numeroReverso=numeroTexto.split('').reverse().join('')
    return numeroTexto===numeroReverso;
}
if (palindromico(valor)) {
    console.log("El Número Ingresado es ",numero," Y Si es Palindromico ",true)
} else {
    console.log("El Número Ingresado es ",numero," Y No es Palindromico",false)
}//Sorprendentemente Nada 