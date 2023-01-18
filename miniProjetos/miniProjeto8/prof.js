// Exercício Nota Escolar
// Obter a média a partir de um array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-98: B
// 90-100: A

const notaAluno = [100,100,80,60];
// 75

console.log(mediaDoAluno(notaAluno));

function mediaDoAluno(notas){
    
    const media = calcularMedia(notas);

    if(media<59) return 'E';
    if(media<69) return 'D';
    if(media<79) return 'C';
    if(media<89) return 'B';
    return 'A';

}

function calcularMedia(array){
    let soma=0;
    for(let value of array){
        soma+=value;

    }
    return soma/array.length
}