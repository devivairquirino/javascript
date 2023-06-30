const nome= new String("Ivair Quirinoo dos Santos Filho")


console.log(nome.search(/ivair/i))


console.log(nome.match(/i/ig))

// o i é usado para tirar o CaseSensitive da procura tornado letras maiuscula e minuscula iguais

//o g é usado para procurar na string toda, todas as ocorrencia da string

console.log(nome.replace(/i/ig,"o"))

console.log(nome.match(/[io]/ig))

// os [] são usados para determinais mais te uma string, ele ira pesquisar cada elemento dentro do []


const num= "1-2-3-4-5-6-7-8-9"
// mostra apenas os numero entre 2 e 9 incluido eles.
console.log(num.match(/[2-9]/g))


const alfa="a,b,c,d, e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v ,x,w,y, z"
const char= num.concat(alfa)
console.log(alfa.match(/[c-g]/ig))

// o | significa tambem

// regex abaixo : letras de a até c, letras de x até z, numeros de 1 a 3 e numeros de 7 até 9, g é para procurar na string completa
console.log(char.match(/[a-c|x-z|1-3|7-9]/g))


//Metacaracteres
console.log(char.match(/\d/g)) //Numeros
console.log(char.match(/\s/g)) //Espaços
console.log(char.match(/\bi/g)) //DWORD

//Quantificadores
// o + faz com que quando tenha o mesmo caracter na sequencia ele seja indentificado como 1 só exemplo: zoologico retorna 'oo' 'o' 'o'
console.log(nome.match(/o+/ig))
// * retorna a primeira letra ou as combinações delas
console.log(nome.match(/ir*/ig))
// ? retorna a primeira letra ou as combinações delas
console.log(nome.match(/iv?/ig))