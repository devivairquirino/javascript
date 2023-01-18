// Operador lógico e (&&)
// Retorna true se ambos forem verdadeiros


let maiorDeIdade = true;
let possuiCarteiraDetrabalho = true;
let podeAplicar= maiorDeIdade || possuiCarteiraDetrabalho;
console.log(podeAplicar);

// Operador NOT (!)
let candidatoRecusado = !podeAplicar;

console.log(candidatoRecusado);
