//Ejercicio Secuencia Divina
//Pregunta Seria La Secuencia de Fibonacci es como el "Hola Mundo", La Ponen de Tarea Siempre, o siempre la enseñan
let f0=0;let f1=1;let contador=1;
alert("Buenos Días Bienvenido al Porgrama Para Calcular la Serie de Fibonacci")
let final=parseInt(prompt("Ingrese El Final de la Secuencia Divina"))
function fibonacci() {
    for (let f2=1;contador<=final;contador++) {
        console.log(f0)
        f2=f0+f1
        f0=f1
        f1=f2

}}
console.log(fibonacci());
/*Formula  , Sacada de Wikipedia , Ni idea de como poner esa F rara
Averiguar por que es que: (Cuando Tenga PC )
ahora me aparece  Undefined a la funcion es raro por que pues igual me esta arrojando los valores correctos entonces como que no se */ 