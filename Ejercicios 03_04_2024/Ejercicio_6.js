const calcularMCD=(a,b)=>{//aparentemente me complique la vida de forma innnecesaria
    if (!Number.isInteger(a)||!Number.isInteger(b)) {
        return "Ambos Números Deben Ser Enteros"
    }
a=Math.abs(a);b=Math.abs(b);//convierte todo numero entero a positivo
while (b!=0) {
    const temporal=b;
    b=a%b;
    a=temporal;
}
return a;
}
console.log(calcularMCD(20,18))