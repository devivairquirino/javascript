function Clientes(nome,idade,estadoCivil,empregado){
    this.nome=nome,
    this.idade=idade,
    this.estadoCivil=estadoCivil,
    this.empregado=empregado;

}
const cliente=new Clientes('Ivair',26,'casado',true);
const cliente2=new Clientes('Joice',22,'casada',true);

cliente.gamer=true;
delete cliente.empregado;
console.log(cliente);

const copia= Object.assign({},cliente);

const copia2={...cliente2,cor:'red'};
console.log(copia,copia2);

function aleatorioInt(min, max){
    min= Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min))+min;
}
console.log(Math.floor(4));