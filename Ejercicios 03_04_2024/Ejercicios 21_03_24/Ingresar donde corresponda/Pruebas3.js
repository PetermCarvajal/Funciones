
// esta mierda se daño , por que no eniendo como es posible que me este dando lo que contiene las variables que ya estan comentadas

const rooms = [100, 101, 102, 103, 201, 202, 203, 301, 302, 303];
const roomStatus = Array(10).fill(false);
const roomReservations = {};


const disponiblesRoomsString = () => {//Necesita Invertir el Final  o  Agregar un ! al inicio  
  return rooms.filter((room, index) => roomStatus[index] === false)
  .map(roomNumber => ` ${roomNumber}`);
  }
const disponiblesRoomsString = () => {
  return rooms.filter((room, index) => !roomStatus[index] === true)
  .map(roomNumber => ` ${roomNumber}`);
  }
const reservadasRoomsString = () => {
  return rooms.filter((room, index) => roomStatus[index] === true)
.map(roomNumber => ` ${roomNumber}`);
}
// const freeRoom = (roomNumber) => {
//   const index = rooms.indexOf(roomNumber);
//   if (index !== -1 && roomStatus[index] === true) {
//     roomStatus[index] = false;
//     delete roomReservations[roomNumber];
//     alert(`La habitación ${roomNumber} ha sido liberada.`);
//   } else {
//     alert(`La habitación ${roomNumber} ya está libre.`);
//   }
// };


// const showAvailableRooms = () => {
//   const availableRooms = rooms.filter((room, index) => {
//     return roomStatus[index] === false;
//   });

//   if (availableRooms.length > 0) {
//     alert(`Las habitaciones disponibles son: ${availableRooms.join(', ')}`);
//   } else {
//     alert('No hay habitaciones disponibles.');
//   }
// };


// const showOccupancy = () => {
//   const availableRooms = rooms.filter((room, index) => {
//     return roomStatus[index] === false;
//   });
//   const reservedRooms = rooms.filter((room, index) => {
//     return roomStatus[index] === true;
//   });
//   alert(`Hay ${availableRooms.length} habitaciones disponibles y ${reservedRooms.length} habitaciones reservadas.`);
// };


const handleUserInput = () => {
  let userInput;
  do {
  
    userInput = prompt('Menú \n' + '1. Reservar una habitación '+ 
    ' 2. Liberar una habitación'+
    ' 3. Consultar ocupación' +
  ' 4. Salir');

    switch (userInput) {
      case '1':
        const roomNumber = parseInt(prompt('Ingrese el número de la habitación:\n:['+disponiblesRoomsString()+']'));
        if (!isNaN(roomNumber) && rooms.includes(roomNumber)) {
          const name = prompt('Ingrese su nombre:');
          reserveRoom(roomNumber, name);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break;
      case '2':
        const roomNumberToFree = parseInt(prompt('Ingrese el número de la habitación que desea liberar:'));
        if (!isNaN(roomNumberToFree) && rooms.includes(roomNumberToFree)) {
          freeRoom(roomNumberToFree);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break;
      case '3':
        showOccupancy();
        break;
      case '4':
        alert('Saliendo...');
        break;
      default:
        alert('Opción inválida. Intente de nuevo.');
        break;
    }
  } while (userInput !== '4');
};

// Ejecutar la función para manejar la interacción con el usuario
handleUserInput();
