const calcularPotencia=(base,exponente)=>{
if (!Number.isInteger(base)||!Number.isInteger(exponente)) {
    return "Ambos Números Deben Ser Enteros"
}
if (exponente===0) {
    return 1;
}
if (base===0&&exponente<0) {
    return 'No se Puede Realizar la Operación'
}
let resultado=1;
for (let i=0; i<Math.abs(exponente);i++) {
    resultado*=base;
}
return exponente<0?1 /resultado:resultado;
}
console.log(calcularPotencia())