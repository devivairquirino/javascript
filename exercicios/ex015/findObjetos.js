function Cliente(id,nome,idade){
    this.id=id,
    this.nome=nome,
    this.idade=idade
}

const clientes=[
    new Cliente(1,'Ivair',26),
    new Cliente(2,'Alana',1),
    new Cliente(3,'Kethellen',17),
    new Cliente(4,'Joice',17)
    
]
const cliente= clientes.find(cliente=>cliente.nome==='Ivair'
)
console.log(cliente);

const test=[{nome:'Ivair'}];
7

const ress= test.find(test=>test.nome==='Ivair');
console.log(ress);