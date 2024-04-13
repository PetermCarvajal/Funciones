//Suma Divisores de un Número 

alert("Buenos Días Bienvenido al Programa Para Calcula La Suma De Los Divisores De Un Número Entero")
let numero=parseInt(prompt("Por Favor Digite Un Número"))
function sumaDivisores(numero) {
    let suma=0;
    for (let i=1;i<numero;i++) {
        if (numero%i===0) {
            suma+=i;
        }
    }
    return suma;
}
console.log(resultados=sumaDivisores(numero));