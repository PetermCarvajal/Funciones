//Factorial de un Número
let base;
alert("Buenos Días Bienvenido al Programa Para Calcular El Factorial")
base=parseFloat(prompt("Por Favor Ingrese Un Número"))
function factorial() {
    let contador=1;let factorial=base;
    while (contador<factorial) {
    base=base*contador
        contador++
    }
    console.log(base)
}
console.log(factorial())