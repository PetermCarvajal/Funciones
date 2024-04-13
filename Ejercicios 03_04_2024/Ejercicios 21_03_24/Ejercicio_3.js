//Calular la Suma de los Digitos de un Número 

alert("Buenos Días Bienvenido Al Programa Para Calcular la Suma de Digitos de Un Número")
let ingreso=parseInt(prompt("Ingrese el Numero a Calcular"))
let resultado = sumaDigitos(ingreso);
console.log( "La suma de los dígitos de ",ingreso," es ",resultado)
function sumaDigitos(numero){
    let suma = 0
    const numeroStr = numero.toString()
    for (let i = 0; i < numeroStr.length; i++) {
        const digito = parseInt(numeroStr[i])
        suma += digito
    }
    return suma
}
