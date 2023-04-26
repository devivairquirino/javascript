// Função transforma a primeira letra em maiusculo de cada palavra
function alterarMaiusculo (texto){
    // transforma o texto em um array com todas as palavra separadas;
    let arrayTexto= texto.split(" ");
    let textoMaiusculo="";

    // intera pelo arraytexto 
    for(let i= 0; i < arrayTexto.length; i++){
        // coloca a primeira letra maiscula de cada palavra
        let upperCase= arrayTexto[i][0].toUpperCase();

        textoMaiusculo+= arrayTexto[i].replace(arrayTexto[i][0],upperCase)+" ";
    }
    return textoMaiusculo;
}
let frase ='estou bem e você?';

let newWord= alterarMaiusculo(frase);





// Função para retonar n caracteres de uma string
function parcialString(texto, n){
    if(texto.length > n){
        texto= texto.slice(0,n);
        texto+='...'
    }
    return texto;
}
let novoTexto= parcialString('Paralelepipedo', 5);


function formatarTitulo(texto){
    let titulo= alterarMaiusculo(texto);
    const max= 20;
  
    return parcialString(titulo, max);;
}
console.log(formatarTitulo('Em uma cidade chove granizo por mais de 10 horas.'));