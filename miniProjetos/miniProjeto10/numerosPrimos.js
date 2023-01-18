// Cria função para mostrar os números primos

// Primos
//Compostos

//Ex: 10, 11

exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    for(let num=1;num<=limite;num++){
        
        if(ehPrimo(num))
            console.log(num);

    }
}
function ehPrimo(num){
    let ehPrimo=true;
    for(let div = 2; div < num; div++){
        if(num % div === 0)
            ehPrimo=false;
        
    }
    return ehPrimo;

}