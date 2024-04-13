const esPalindromo=numero=>{
    if (!Number.isInteger(numero)){
        return "El Valor Debe Ser Un Número Entero";
    }
    const numeroString=Math.abs(numero).toString();
    let numeroInvertido="";
    for (let i=numeroString.length-1;i>=0;i++) {
        numeroInvertido+=numeroString[i];
    }
    return numeroString===numeroInvertido;
}
console.log(esPalindromo())