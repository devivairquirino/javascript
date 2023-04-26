let cliente1={
    nome: 'Ivair',
    idade: 27,
    profissao: 'programador',
    aprovado: true,

}
function alterarDados(clientes){
    clientes.nome= 'Kethellen';
    clientes.idade= 18;
    clientes.profissao= 'Plantadora';
    clientes.aprovado= true;

    return clientes;
}
console.log(cliente1);


let cliente2= alterarDados(cliente1);

console.log(cliente2);

console.log(cliente1["nome"]+cliente1["idade"]);

