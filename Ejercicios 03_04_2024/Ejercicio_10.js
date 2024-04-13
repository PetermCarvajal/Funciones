const sumaDivisores=numero=>{
    if (!Number.isInteger(numero)){
        return "El Valor debe Ser Un Número Entero"
    }
    numero=Math.abs(numero);
    let suma=0;
    for (let i=1;i<numero; i++) {
        if (numero%i===0) {
            suma+=i;
        }
    }
    return suma;
}
console.log(sumaDivisores())