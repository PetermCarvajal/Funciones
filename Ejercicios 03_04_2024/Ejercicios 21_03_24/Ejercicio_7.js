//Programa Para Contar las Vocales de una Cadena de Texto 
let texto;let exto;
alert("Buenos Días Bienvenido A El Contador De Vocales")
texto=prompt("Por Favor Ingrese La Cadena de Texto")
function contarVocales(cadena) {
    let contadorVocales = 0;
    for (let i=0;i<cadena.length;i++) {
        const caracter=cadena[i];
        if (caracter==="a"||caracter==="e"||caracter==="i"||caracter==="o"||caracter==="u"||caracter==="A"||caracter==="E"||caracter==="I"||caracter==="O"||caracter==="U") {
            contadorVocales++;
        }
    }
    return contadorVocales;
}
console.log(numeroVocales=contarVocales(texto));
//Si  estoy conciente de que existe una funcion que  convierte todo lo ingresado en Minusculas , pero Pués no se me dio Por Hacerlo Así igual que mi Afan de las Mayusculas 