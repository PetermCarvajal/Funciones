const sumaDigitos=numero=>{
    const numeroString=Math.abs(numero).toString();
    let suma=0;
    for (let i=0;i<numeroString.length;i++) {
        const digito=parseInt(numeroString[i]);        
        suma+=digito;
    }
    return suma;
}
console.lo(sumaDigitos())