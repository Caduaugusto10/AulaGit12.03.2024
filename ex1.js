let a = -10;
let b = 2;
let inicio;
let fim;

if(a < b){
    inicio = a
    fim = b
}else{
    inicio = b
    fim = a 
}

while (inicio <= fim){
    console.log (inicio);
    inicio++;
}
console.log("while terminou");