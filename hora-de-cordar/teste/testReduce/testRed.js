

// Define uma variável constante chamada "word" e atribui o valor "Kethellen" a ela
const word = 'Kethellen';

// Define uma função chamada "iterator" que recebe um parâmetro "array"
function iterator(array,funct) {
    let ress="";
    if(typeof funct==='undefined'){
        throw new Error("É obrigatório a declaração dos dois parâmetros")
    }
  // Cria um novo iterador para o parâmetro do "array" usando a função Symbol.iterator incorporada
  it_array = array[Symbol.iterator]();

  // Obtém o primeiro valor do iterador usando a função .next(), depois o armazena na variável "result"
  let result = it_array.next();

  // Usa um loop "while" para iterar sobre o restante do iterador até que não haja mais valores
  while (!result.done) {
    // Regista o valor atual do iterador no console
    ress+= funct(result.value);

    // Obtém o próximo valor do iterador usando a função .next(), depois o armazena na variável "result"
    result = it_array.next();
  }
  return ress
}

// Chama a função "iterator" com a variável constante "word" como argumento

const resultado=iterator(word,(el)=>{
    el+='-'
    return el
})
console.log(resultado)