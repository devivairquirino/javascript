// Criar uma função que exibe a quantidade de *
// que aquela linha possui
exibirAsteriscos(10);

function exibirAsteriscos(linhas){
//    let asteriscos='';
//    for(let i=1;i<=linhas;i++){
//        asteriscos+='*';
//        console.log(asteriscos);
//    }


    for(let linha=1;linha<=linhas;linha++){
        let padrao ='';
        for(let i=0;i<linha;i++){
            padrao+='*';
        }
        console.log(padrao);
    }
}