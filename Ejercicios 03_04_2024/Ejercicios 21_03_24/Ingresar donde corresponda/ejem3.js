//Var ver balance sala1/2 y verBalance
const sala1 = Array(10).fill(false);
const sala2 = Array(10).fill(false);

function verbalance1() {
  return  2
}
function verbalance2() {
  return  2
}

function verBalance() {
  return alert(verbalance1()+verbalance2())
}
function verDisponibilidad() {
  alert("Sala 1:");
  alert(sala1.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
  alert("Sala 2:");
  alert(sala2.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
}

function reservarAsiento(){
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asiento = parseInt(prompt("Ingresa el número del asiento (1 a 10)")) - 1;
  if (sala === "1" && !sala1[asiento]) {
    sala1[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala 1 reservado.`);
  } else if (sala === "2" && !sala2[asiento]) {
    sala2[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala 2 reservado.`);
  } else {
    alert("El asiento ya está reservado o la sala no es válida.");
  }
}


function verPelicula() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asientosLibres = sala === "1" ? sala1.filter(asiento => !asiento) : sala2.filter(asiento => !asiento);
  if (asientosLibres.length > 0) {
    alert(`Hay ${asientosLibres.length} asientos libres en la sala ${sala}.`);
    alert("Disfrutad de la película!");
  } else {
    alert(`Lo siento, todos los asientos de la sala ${sala} están reservados.`);
  }
}

alert("Buenos Bienvenidos a Cinep ep ep ep ep polis\n\n el Gracioso que hizo el Registro del Cine no se Dio Cuenta que Era Tartamudo el Fundador del Cine")
while (true) {
  const opcion = prompt("Por Favor Seleccione Una Opción para Continuar \n1. Ver disponibilidad de asientos \n2. Reservar asiento \n3. Ver ocupación sala \n5. Salir" );

  switch (opcion) {
    case "1":
      verDisponibilidad();
      break;
    case "2":
      reservarAsiento();
      break;
    case "3":
      verPelicula();
      break;
    case "4":
      alert("¡Hasta luego!");
        break;
    case "5":
      alert(verBalance())
      break;

    default:
      alert("Opción no válida. Intenta de nuevo.");
  }

}//const,variable,function,prompt,parseint, ?,if,alert,===,while,console.log,switch,case,break,default,