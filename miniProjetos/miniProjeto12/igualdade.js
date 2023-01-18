// Exercicio 43 - Igualdae de Objetos (Exercicio)

function Endereco(rua,cidade,cep){
    this.rua= rua,
    this.cidade= cidade,
    this.cep = cep
}

const endereco1= new Endereco('Rua A','Cajati',18670000);
const endereco2= new Endereco('Rua A','Cajati',18670000);

function saoIguais(endereco1,endereco2){
    //compara se as propriedades são iguais
    
    return endereco1.rua === endereco2.rua&&
            endereco1.cidade === endereco2.cidade && endereco1.cep===endereco2.cep;   
}

console.log('Tem as mesmas propriedades? ',saoIguais(endereco1,endereco2));