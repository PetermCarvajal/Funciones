//Validar si el Númmero es Primo o No

alert("Buenos Días Bienvenido al Programa Para  Saber Si Un Número es Primo")//a diferencia del Sexto Punto no me queda muy Claro si todos estos If Deben estar dentro de la function o no
let valor = parseInt(prompt("¿De Qué Número Deseas Validar Si Es Primo?"))
if (primo(valor)) {
    if (valor===1) {
        console.log("El Numero ",valor," Es ",false)
    }
    console.log("El Numero ",valor," Es ",true)
} else {
    console.log("El Numero ",valor," Es ",false)
}
function primo(numero) {
    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}a