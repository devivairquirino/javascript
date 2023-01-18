const num = [1,2,3];
//adicionar elementos no array

//inicio
num.unshift(0);
console.log(num);

// Meio
num.splice(2,0,'oi');
console.log(num);
//Final
num.push(5);
console.log(num);

//Encontrar valores.

const numeros=[2,5,6,5,7];
//retorna a posição do numero no array, se não encontrar retorna -1, ele vai parar assim que encontrar o primeiro numero mesmo que tenha varios 6.
console.log(numeros.indexOf(6));

// retorna a ultima ocorrencia do numero procurado.
console.log(numeros.lastIndexOf(5));

console.log(numeros.includes(5));