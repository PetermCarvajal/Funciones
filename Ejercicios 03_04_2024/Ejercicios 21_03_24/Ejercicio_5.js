//Programa para Invertir Una Cadena De Texto (Memorizar||Dominar ,Puede Salir En Entrevistas De Trabajo)
alert("Buenos Días Este Es Un Programa Para Invertir Una Cadena De Texto")
let cadenaTexto=prompt("¿Que Cadena De Texto Desea Invertir?")
function invertir(cadenaTexto) {
    if (cadenaTexto==="") {
        return "";
    } else
        return invertir(cadenaTexto.substr(1))+cadenaTexto.charAt(0)
}
console.log(invertir(cadenaTexto));
// " " No es igual a empty string  aunque  el console.log  diga lo contrario por que si pones alt 255 arroja 
//especificamente alt 255  así que no se si es que alt 255 no es un empty string o es otra cosa 