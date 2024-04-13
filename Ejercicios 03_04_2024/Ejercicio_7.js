const contarVocales=str=>{
    str=str.tolowecase();
    let vocales=0;
    for (let i=0;i<str.length;i++) {
        const char=str[i];
        if (char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){vocales++           
        }
    }
    return vocales;
}
console.log(contarVocales());