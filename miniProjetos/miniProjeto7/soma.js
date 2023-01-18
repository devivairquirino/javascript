//Criar função somar que retorna a
// soma de todos os múltipos de 3 e 5

let result= somarMultiplos(10);

console.log(result)

function somarMultiplos(num){
    let multiplo3=[];
    let multiplo5=[];

    for(let i=3;i<=num;i++){
        if(i%3==0){
            multiplo3.push(i);
        }
        if(i%5==0){
            multiplo5.push(i);
        }
    }
    let multiplosAll=[...multiplo3,...multiplo5];
    multiplosAll.sort((a,b)=> a-b);
    console.log('Multipos de 3:',multiplo3);
    console.log('Multiplos de 5: ',multiplo5);
    console.log('Multiplos de 3 e 5 :',multiplosAll);

    let soma=multiplosAll.reduce((a,b)=>a+b);
    console.log('Soma dos Multiplos: ',soma);
}

result=soma2(10);

function soma2(num){
    let multiplo3=0;
    let multiplo5=0

    for(let i=3;i<=num;i++){
        if(i%3===0){
            multiplo3+=i;
        }
        if(i%5===0){
            multiplo5+=i;
        }
    }
    let soma=multiplo3+multiplo5;

    return soma;
}
console.log(result);