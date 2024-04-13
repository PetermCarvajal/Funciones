// //Calcular la Potencia de un Número

let base,exponente;
alert("Buenos Días Bienvenido al Programa Para Calcular La Potenciaión")
base=parseFloat(prompt("Por Favor Ingrese la Base"));
exponente=parseInt(prompt("Por Favor Ingrese el Exponente"));
function potencia() {
    let contador=1;
    multiplicador=base;
    while (contador<exponente) {
    base=base*multiplicador
        contador++
    }
    console.log(base)
}
console.log(potencia());

//Revisandolo ants de la entrega me acabo de percatar que Existe una Funcion Para Hacer
//Eso, Ni Modo Igual lo Hize de primero Porque lei el Enunciado y de una Me llego el como Resolverlo

alert("Buenos Días Bienvenido Al Programa Para Calcular La Potencia de Un Número")
let input=prompt("Por Favor Ingrese 2 Números Separados Por Cualquier Signo de Puntuacion Agrupación o de Operación\n La Base y El Exponente")
let [b,e]=input.split(/[[,.;.:-_/ |&=*-+%]/)
function potencia() {
    let contador_1=1;let multiplicador;
    multiplicador=b;
    while (contador_1<e) {
        b=b*multiplicador
        contador_1++
    }
    console.log(b) 
}
console.log(potencia())