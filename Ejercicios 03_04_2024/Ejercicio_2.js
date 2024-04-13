const esPrimo=num=>{
    if (num<2) {
        return false;
    }
    if(numero===2){
        return true;
    }
    if (numero%2===0){
        return false;
    }
    const limite =math.sqrt(numero);
    for (let i=3;i<=limite;i+=2){
        if(numero%i===0){
            return false;
        }
    }
    return true;
}
console.log(esPrimo())