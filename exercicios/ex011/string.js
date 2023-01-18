const mensagem= new String('Bom dia');

console.log('String: ',mensagem);

console.log('Tamanho da string: ',mensagem.length);

console.log('Posição 2: ',mensagem[2]);

console.log('Existe a palavra dia nessa string? ',mensagem.includes('dia'));

console.log('Começa com B: ',mensagem.startsWith('B'));
console.log('Termina com a: ',mensagem.endsWith('a'));
console.log('Qual indice da de dia: ',mensagem.indexOf('dia'));
console.log('Substitua bom por Otimo: ',mensagem.replace('Bom','Otimo'));

console.log('Separar palavras: ',mensagem.split(' '));

