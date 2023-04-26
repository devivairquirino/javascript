function* cores(){
    const nome= yield 'Nome do Cliente?';
    const idade= yield 'Idade do cliente?';
    return `Nome ${nome} e a idade ${idade}`;
}


let x = cores();
console.log(x.next('Ivair').value);
console.log(x.next('Ivair').value);
console.log(x.next('Iv3air').value);

let num= ()=>2;

function imprimir(cliente){
    this.cliente=cliente;
    this.dados=dados;
}
let ativar= imprimir.dados="Estudante";

console.log(imprimir.dados)