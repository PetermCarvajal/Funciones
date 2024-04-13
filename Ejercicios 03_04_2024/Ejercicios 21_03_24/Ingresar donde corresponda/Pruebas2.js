const rooms = [100, 101, 102, 103, 201, 202, 203, 301, 302, 303];
const roomStatus = Array(10).fill(false);
const roomReservations ={};
const reserveRoom=(roomNumber, name) => {//Una Funcion que contiene 2 datos
const index = rooms.indexOf(roomNumber);//a index la manda a room y las declara como false 



if (index !== -1 && roomStatus[index] === false) {/*Si esta "False" va a agarrar y a 1 le va a asignar true y a otro name lo va a el name que ingrese el usuario*/
roomStatus[index] = true;
roomReservations[roomNumber] = name;//si la habitacion esta libre agarrara "roomNumber" y le va a unir a "name", por medio de un mensaje  indianco que la reservacion es Exitosa
alert(`La habitación ${roomNumber} ha sido reservada por ${name}.`)
} else {// si no entonces es por que ya estaba ocupada y va a mostrar este mensaje
  alert(`La habitación ${roomNumber} ya está reservada.`);
}
};

const disponiblesRoomsString = () => {//Funcion para mostarar las habitaciones libres separa room e index por medio de filter, luego agarra a index y lo mete en .map y terner la lista de las que estan disponibles
  return rooms.filter((room, index) => !roomStatus[index] === true)
  .map(roomNumber => ` ${roomNumber}`);
  }


const reservadasRoomsString = () => {//lo mismo que la de arriba pero esta guarda las reservadas
return rooms.filter((room, index) => roomStatus[index] === true)
.map(roomNumber => ` ${roomNumber}`);
}


const freeRoom = (roomNumber) => {//Esta va a liberar una Habitacion ,suponiendo que le este  ocupada si no esta ocupada dira que  ya estaba libre 
  const index = rooms.indexOf(roomNumber);
  if (index !== -1 && roomStatus[index] === true) {//condicional si ambas se cumplen entonces va a entrar
    roomStatus[index] = false;
    delete roomReservations[roomNumber];// si la habitacion esta ocupada va a eliminar" indicando que la pisa esta libre
    alert(`La habitación ${roomNumber} ha sido liberada.`);//→Ya se explico antes
  } else {
    alert(`La habitación ${roomNumber} ya estaba libre.`);//→Ya se explico antes 
  }
};

const showAvailableRooms = () => {//esta variable muestra las habitaciones ocupadas 
  const availableRooms = rooms.filter((room, index) => {//filtra rooms Agarra index y le dice inviertelo y si esa inversion  es = a false entonces 
    return  roomStatus[index] === false
  });

  if (availableRooms.length > 0) {
    alert(`Las habitaciones disponibles son: ${availableRooms.join(', ')}`);//si la condicion se cumple  muestra esto
  } else {
    alert('No hay habitaciones disponibles.');//si no se cumple, entonces es por que index estaba en false al invertirlo quedo true y al comparar 
//true con false =es false ,  asumiendo que todas las habitaciones esten ocupadas
  }
};


const showOccupancy = () => {// esta muestra las habitaciones disponibles  
  const availableRooms = rooms.filter((room, index) => {
    return roomStatus[index]===false;
  });
  const reservedRooms = rooms.filter((room, index) => {
    //retorna  compara y retorna true  (compara index)
    return roomStatus[index] === true;
  });//cuando se valida se recorren todas las room entonces arroja las que estan libres  reservadas  el numero de las que estan disponibles y reservadas (#room)
  alert(`Hay ${availableRooms.length} habitaciones disponibles y ${reservedRooms.length} habitaciones reservadas.\n Las Habitaciones Disponibles son:\n [${availableRooms.join(', ')}]\n Las Habitaciones Reservadas Son:\n [ ${reservedRooms.join(',')}]`);
};


const handleUserInput = () => {//usa  un cilo para repetir hasta que el usuario ingrese 4  
  let userInput;
  do {
   userInput = prompt('Menú \n' + '1. Reservar una habitación '+//Muestra un Menu Ciclico
    ' 2. Liberar una habitación'+
    ' 3. Consultar ocupación' +
  ' 4. Salir'); 
    switch (userInput) {// valida que hay en userInput
      case '1'://en el primer Caso va a mostrar la lista de Todas las Habitaciones  esten o no esten ocupadas "Arreglar despues esta parte si alcanzael tiempo"
        const roomNumber = parseInt(prompt('Ingrese el número de la habitación:\n:'+ disponiblesRoomsString() + ']:'));
        if (!isNaN(roomNumber) && rooms.includes(roomNumber)) {
          const name = prompt('Ingrese su nombre:');//pide que ingrese l nombre para poder  asignarsuelo a la variable name y eso se le dara a reserveRoom 
          reserveRoom(roomNumber, name);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');//Si el numero que el usuario ingreso no esta en la  lista mostrar este error
        }
        break;
      case '2':
        const reservedRoomsString = reservadasRoomsString();// esta es para liberar una habitacion  ,se agarra lo que contiene el otro se recorre y se le  muestra a la persona 
        const roomNumberToFree = parseInt(prompt('Ingrese el número de la habitación que desea liberar:\nLas Habitaciones Reservadas Son:'+reservedRoomsString));//dentro de este mensaje
        if (!isNaN(roomNumberToFree) && rooms.includes(roomNumberToFree)) {// si la validacion se cumple va a 
          freeRoom(roomNumberToFree);//liberar la pieza  que paso de reservada a enlistara para uso 
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');//si el numero que se ingreso no corresponde a la lista e mostrara este 
        }
        break;
      case '3':
        showOccupancy();//ejecuta y muestra
        break;
      case '4':
        alert('Saliendo...');//imprime
        break;
      default:
        alert('Opción inválida. Intente de nuevo.');//mensaje por defecto para evitar que se salga del programa
        break;
    }
  } while (userInput !== '4'); //cicla hasta que sea 4 
};



handleUserInput();