//Maximo Común Divisor
/*Ambos codigos Funcionan
en mi Opinion  prefiero el 2do Hay Menos Margen de provocar un fallo en el sistema
es Probable que (Lo ideal, Prefiera) Meter Todo dentro de la Funcion pero se me Hace Raro poner los prompt input y  chala la dentro de las Funciones */

// let aNumber;let bNumber;    
// alert("Buenos Días Bienvenido A El Programa Para  Calcular el Maximo Común Divisor")
// a=parseInt(prompt("Ingrese Un Número")); b=parseInt(prompt("Ingrese Un Segundo Número"));
// function mcd(aNumber,bNumber) {
//     let cNumber=bNumber;
//     while (bNumber !== 0) {
//         cNumber=bNumber
//         bNumber=aNumber%b
//         aNumber=cNumber
//     }
//     return a;
//   }
// console.log(mcd(a, b))

alert("Buenos Días Bienvenido Al Programa Para Sacar Maximo Común Divisor")
let input=prompt("Ingrese 2 números separados por una coma (por ejemplo, 5,10):")
let [a, b]=input.split(/[" ",.;.<>!:-|_/ |&=*-+%]/)// alt 255 {es el recuadro amarillo }
function mcd(a, b) {
  let c=b;
  while (b!==0) {
    c=b 
    b=a%b
    a=c
  }
  return a;
}
console.log(mcd(a, b))

/* " */  /* " */
//MCD Cuando tenga PC retomar la idea de usar una Lista Para este tipo de Ejercicios
// ,array, standars , etc para poder  poner como invalidante o validado el caracter Null " " o el vacio  ese recuadro amarillo  de arriba
//correción lista aunque aun no se por que el console.log era el problema, Posibles Causas: Null ...