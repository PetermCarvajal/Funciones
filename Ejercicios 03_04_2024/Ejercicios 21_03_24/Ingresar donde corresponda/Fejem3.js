//
const sala1 = Array(10).fill(false);
const sala2 = Array(10).fill(false);
let balanceSala1 =0;let balanceSala2 =0;let costoBoleto=14;


//suma las Variables  y Luego muestra un mensaje  con el resultado
function verBalance() {
  verBalance=balanceSala1+balanceSala2
 return alert("El Balance en General es: "+verBalance+" Dolares"  )
}

//Muesra la disponibilidad de los Asientos creando con la funcion mapa un array temporal y marcando con X o no Si es que esta en true o false  el valor dentro del array true [X] y false[ ] que va mostrando al usuario y separado por un salto de linea
function verDisponibilidad() {//cuando tenga pc practicar estos reemplazos 
  //+sala1.map((asiento,i)=>asiento=true ? boleto++:boleto),filter...
 alert("Sala 1:\n" + sala1.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
 alert("Sala 2:\n" + sala2.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
}

//esta pregunta al usuario y en cada pregunta guarda la respuesta en una variable 
function reservarAsiento() {
 const sala = prompt("Ingresa el número de la sala (1 o 2)");
 const asiento = parseInt(prompt("Ingresa el número del asiento (1 a 10)")) - 1;
 if (sala === "1" && !sala1[asiento]) {//si sala es 1  SE METE ACA  e invierte el  valor de false dentro del array , entonces es True
   sala1[asiento] = true;//aqui se le asigna
   balanceSala1+=costoBoleto;//aqui se suma costo de boleto cada vez que  X aparezca entonces el resultado de eso lo va a signar a valor y asi ira sumando o no  en funcion del.map
   alert(`Asiento ${asiento + 1} de la sala 1 reservado.`);
 } else if (sala === "2" && !sala2[asiento]) {
   sala2[asiento] = true;
   balanceSala2+=costoBoleto;//lo mismo que lo de arriba 
   alert(`Asiento ${asiento + 1} de la sala 2 reservado.`);
 } else {
   alert("El asiento ya está reservado o la sala no es válida.");
 }
}
//Pide al usuario algo y lo guarda en la variable 
function verPelicula() {
 const sala = prompt("Ingresa el número de la sala (1 o 2)");
 const asientosLibres = sala === "1" ? sala1.filter(asiento => !asiento) : sala2.filter(asiento => !asiento);//filta por sala  1 agarra la variable asiento  a eso le invierte el valor , de sala 1 o sala 2 sgun corresponda  entre ? y el : va a invertir lo de sala 1 y despues de : va a invertir lo de la sala 2 
 if (asientosLibres.length > 0) {//recorre todo el array  y si es mayor a 0 entonces muestra
   alert(`Hay ${asientosLibres.length} asientos libres en la sala ${sala}.`);//esta  X ...
   alert("Disfrutad de la película!");
 } else {
 alert(`Lo sentimos, todos los asientos de la sala ${sala} están reservados.`);//si da 0 no hay asientos libres
 }
}
// Cartel de bienvenida
alert("Bienvenidos a Cinep ep ep ep ep polis \n\nEl Gracioso que hizo el Registro del Cine no se Dio Cuenta que Era Tartamudo el Fundador del Cine")


//menu 
while (true) {
  var opcion = prompt("Por Favor Seleccione Una Opción para Continuar \n1. Ver disponibilidad de asientos \n2. Reservar asiento \n3. Ver ocupación sala \n4. Ver Balanance");
 switch (opcion) {
   case "1":
   verDisponibilidad();//invoca la funcion de arriba con el mismo nombre 
   break;
   case "2":
   reservarAsiento();//invoca la funcion de arriba con el mismo nombre
   break;
   case "3":
   verPelicula();//invoca la funcion de arriba con el mismo nombre
   break;
   case "4":// menu 2 
   opcion = prompt("Buenos Dias Que Balance Desea Conocer \n\n1. Balance Sala 1\n2.Balance Sala 2\n3. Balance General del Cine")
   switch (opcion) {
     case "1": //muestra el balance de la sala segun corresponda 
     alert("El Balance en la Sala 1 es: " + balanceSala1+" Dolares")
     
     break;
     case "2": //muestra el balance de la sala segun corresponda 
     alert("El Balance en la Sala 2 es: " + balanceSala2+" Dolares")
       break;
     case "3":
     verBalance();//invoca la funcion de arriba con el mismo nombre
     break;
     case "4"://Se despide del usuario
     alert("¡Hasta la Proxima!")
     break;
     default:
     alert("Opción Invalida Por Favor Intente De Nuevo") //Indica que la opcion marcada no es valida
     break;
   }
   case "5"://Se despide del usuario
    alert("¡Hasta luego!");
    break;
   default:
   alert("Opción no válida. Intenta de nuevo.");//Indica que la opcion marcada no es valida
   break;
 }
} 
