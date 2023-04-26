let num = 'hoje esta muito quente';

console.log(num);

// split tranforma a string em um array onde cada elemento é uma palavra separa por espaço
// map intera o array criado pelo split executando uma função
let num2= num.split(" ").map((element)=>{

// charAt retorna o valor que esta presente no index passado como parametro no caso (0) primeira letra da palavra
// toUpperCase coloca a letra para maiusculo
// slice adiciona os as letras ta palavra excluindo a primeira
    return element.charAt(0).toUpperCase() + element.slice(1);

    // join tranforma o array em uma string separando os elementos por espaço.
}).join(" ");

console.log(num2);

