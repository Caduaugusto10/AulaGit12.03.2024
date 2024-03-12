//inicio tabuada
let a = 10;
let b = 15;
let i = 0;
 
if( a && b < 0 ){
    console.log("Número inválido. Tente novamente.")
}else if (a % 1 !=0  & b % 1 !=0){


}else{
    for (let i = 0; i <= b; i++){
        console.log(a + " x " + i + " = " + a*i);

    }
    console.log(" Acima está a tabuada do número " + a + " Até o número " + b);
}


