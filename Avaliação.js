let a = 30;
let b = 15;
let i = 0;

if(a < 0){
    console.log("Número inválido. Tente novamente.");
}else if(a % 1 !=0){
    console.log("Número inválido. Tente novamente.");
}else if(b < 0){
    console.log("Número inválido. Tente novamente.");
}else if(b % 1 != 0){
    console.log("Número inválido. Tente novamene.");
}else{
    for (let i = 0; i <= b; i++) {
        console.log(a + " x " + i + " = " + a*i);
    
    }
    console.log("Acima esta a tabuada do número " + a + " até o número " + b);
}