let frase = "Bom dia, espero que tenha um ótimo dia!";
let quantasVogaisTem = 0;
let quaisVogais = [];


//NFD é a forma de normalizar o Unicode ()
let semAcento = frase.normalize("NFD").replace(/[\u0300-\u036f]/g,"");// A regex é uma combinacão dos códigos dos acentos possíveis

for (let i = 0; i < semAcento.length; i++) {
    if ('aeiouAEIOU'.indexOf(semAcento[i]) !== -1) {
        quantasVogaisTem++;
        quaisVogais.push(semAcento[i]);
    }
}
console.log(semAcento);
console.log("Número total de vogais:", quantasVogaisTem);
console.log("Vogais encontradas:", quaisVogais.join(', '));