let frase='Hoje estou um pouco cansado, mas gostaria de estar mais animado';

console.log(frase.indexOf('cansado'));

let cansado= frase.slice(20, 27);

console.log(cansado);
let newfrase= frase.replace("cansado","feliz");

console.log(newfrase);

let arrayfrase= frase.split(" ");

console.log(arrayfrase[4]);
console.log(frase.indexOf('a'));
console.log(frase.lastIndexOf("a"));