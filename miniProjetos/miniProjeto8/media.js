// Exercício Nota Escolar
// Obter a média a partir de um array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-98: B
// 90-100: A

const notaAluno = [100,0,80,60];
// 75

console.log(mediaDoAluno(notaAluno));

function mediaDoAluno(notas){
    let numerosDeNotas=notas.length;
    let total=0;
    for(let i=0;i<numerosDeNotas;i++){
        total+=notas[i];
        
    }
    let media=Math.floor(total/numerosDeNotas);
    
    if(media >= 0 && media <= 59)
        return 'E';
    if(media >=60 && media <= 69)
        return 'D'
    if(media >= 70 && media <= 79)
        return 'C';
    if(media >= 80 && media <= 89)
        return 'B';
    if(media >= 90 && media <= 100)
        return 'A';
    
    

    
}