const calcularFactorial=numero=>{
    if (numero<0){
        return"Para Este Programa Solo Se Reciben Numeros Positivos";//Validar Numero Positvo
    }
    else if(numero===0){
        return "1";
    }
    else{
        let factorial=1;
        for (let i =1;i<=numero;i++) {
            factorial*=i
        }
        return factorial;
    }
}
console.log(calcularFactorial()) 