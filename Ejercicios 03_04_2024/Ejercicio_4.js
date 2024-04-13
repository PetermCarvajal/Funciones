const generarFibonacci=(n)=>{
    if (n<=0||!Number.isInteger(n)){
        return "Por Favor, Ingrese Número Entero Positivo";
    }
    let resultado="";let a=0,b=1;
    resultado+='${a},${b}';
    for (let i=2;i<n;i++) {
        const siguiente=a+b;
        resultado+='${siguiente}';
        a=b;
        b=siguiente;
    }
    return resultado;
}
console.log(generarFibonacci())