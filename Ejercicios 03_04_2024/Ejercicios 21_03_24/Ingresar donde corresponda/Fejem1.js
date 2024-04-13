const denominations = [50000,20000,10000,5000, 2000, 1000]; /*Se Inicio Una Constante Llamada "denominations" y es una Lista que contiene la denominacion númerica que
 le indica a el programa la "denominacion de cada Billete 1000,2000,5000,10000,20000,50000*/ 
function getWithdrawalAmount() {/*Crea una Funcion de Dato Númerico Entero que pregunta ... y  retorna esa misma cantidad Guardandola Como Número flotante */
  const userInput = prompt("¿Cuánto dinero deseas retirar  ?");
  return parseFloat(userInput);
}
function calculateBilletsNeeded(amount) {/*Esta Función calcula Los billetes necesarios Para lo que sea que el usuario  ingresara ejemplo si pone 4000  dira que 
necesita 2 billetes cada uno con una denominación de $2000*/
  return denominations.map(denomination => {/*recorre la lista y por cada itineracion  va a  divir el monto entre denominacion y lo va a redondear al Numero entero 
  mas Cercano CADA  resultado se va a guardar en otro array que la misma variable de map crea*/  
    const billetsNeeded = Math.floor(amount / denomination);
    amount -= billetsNeeded * denomination;/*Vamos a  multiplicar billetsNeeded * denomination el resultado lo vamos a restar a amount y lo que de esa resta lo vamos a guardar 
    en amount */
    return billetsNeeded;
  });
}
function isValidWithdrawalAmount(amount) {/*Esta Función valida que el monto sea un numero mayor a 0 */
  return amount > 0 && amount % 1 === 0;/*YY monto en su 1% sea a 0 entonces si la división en su residuo da como resultado 0 entonces el numero ingresado por el usuario no es 
  decimal, Si el monto es válido entonces “true” , si no es válido entonces retorna “false” , si 1 de los 2  no cumple la condicion entonces se va arrojar false*/
}
function ATMTransaction() {/*Esta Funcion Agarra todas las Funciones y entonces antes de mostrar algo   */
  const withdrawalAmount = getWithdrawalAmount();
  if (!isValidWithdrawalAmount(withdrawalAmount)) {/*Si la funcion de "isValidWithdrawalAmount tiene el valor de "False" guardado entonces va a  Mostrar el Siguiente mensaje*/
    alert("El monto solicitado no es válido.");
    return;
  }
  const billetsNeeded=calculateBilletsNeeded(withdrawalAmount);
  denominations.forEach((denomination, index) => {/*Esta Funcion Muestra Todo, dado que es el resultado de agarrar todas las funciones y agarrar los resultados para imprimirlas
     en el siguiente alert*/
  if (billetsNeeded[index] > 0) {
    alert("Para retirar $" + withdrawalAmount+", necesitas: "+ billetsNeeded[index] + " billetes de $"+denomination);
  }
});   
}



ATMTransaction();//llama para iniciar la ejecución del código