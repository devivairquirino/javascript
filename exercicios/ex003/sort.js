let names=['bola','abelha','abobora','batom'];

/*sort() coloca os elementos em ordem crescente
compara só o primeiro caracter, somente se os caracteres forem iguais,
ele compara o segundo e assim por diante.
*/
names.sort();
console.log(names);

let numbers=[4,23,1,30,0];

//Por só comparar o primeiro caracter os numeros não ficam na ordem correta.
numbers.sort();
console.log(numbers);

//Para resolver essa problema é necessário passar um função de comparação como parametro. array.sort(comparefunction)

/*
1ºSe compare(a, b) for menor que zero(-1), o método sort() classifica a para um índice menor que b. Ou seja, o a virá antes de b.
2ºSe compare(a, b) for maior que zero(1), o método sort() classificará b com um índice menor que a, ou seja, b virá primeiro.
3ºSe compare(a, b) retornar zero(0), o método sort() considera a igual a b e deixa suas posições inalteradas.*/

numbers.sort((a,b)=>{
    if(a>b) return 1;
    if(a<b) return -1;
    return 0;
})
//OU simplificado
numbers.sort((a,b)=> a-b);
console.log(numbers);

let animais=['coelho','abelha','zebra','tatu','javali'];


console.log('normal: '+animais);

animais.sort();
console.log('crescente: '+animais);
//para colocar em ordem decrescente use a funcção comparação ao contrário.Inverta o -1 com 1;

animais.sort((a,b)=>{
    if(a>b) return -1;
    if(a<b) return 1;
    return 0;
})
console.log('decrescente: '+animais);

let objs=['Lapis','caneta','Estudar','trote','Zebra','alicate']
console.log('Normal: '+objs)

console.log('sort Sem comparação: '+ objs.sort());

//Usando operador ternario para ficar mais simples, mas é preciso colocar as letra para maiusculo para comparar corretamente.

objs.sort((a,b)=>{
    //transforma em maiusculo
    let x= a.toUpperCase();
    let y= b.toUpperCase();

    //ternario, mas é a mesma coisa da função comparação.
    return x==y?0 :x>y?1:-1;
})

console.log('Com comparação personalizada: '+objs);

console.log('MAIUSCULAS/ minusculas: '+animais);



let acento=['ãtan','cola','chaminé','ácara']

console.log(acento.sort());

//para palavras com acento use a função a.localeCompare(b) para deixa em ordem
console.log(acento.sort((a,b)=>{
    return a.localeCompare(b);
}))
//Misturando o acento com maiusculas e em ordem decrescente

console.log('DESAFIO: ');

let random=['ála','Ûma','çacarose','aprova','xadrez','MINGUAL']

random.sort((a,b)=>{
    let x=a.toUpperCase();
    let y=b.toUpperCase();
    

    return x==y ? 0 : x>y?-1:1; 
})

console.log(random);

//localeCompare compara as strings lenvando em consideração os acentos e letras maiusculas.
let words=['pé','Carol','pato','ás','abelha']

    words.sort((a,b)=>{     
    return a.localeCompare(b);
})

console.log(words);