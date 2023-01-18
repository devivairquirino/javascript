const nome='Ivair';
const idade=26;
const casado=true;
const futuro=undefined;
let saldo=null;

const clientes={
    nome:['Ivair','Kethellen','Alana'],
    idade:[26,17,1],
    casado:[true,true,false]
}
//Este for vai percorrer o array que esta em nome
for (let i=0; i<clientes.nome.length; i++){
    //esse for vai percorrer as propriedades do objeto
    for(let dados in clientes){
        //clientes[dados][i] vai mostrar o 1 dado de cada propriedade do objeto depois o segundo e assim por diante.
        console.log(dados+": "+clientes[dados][i])
    }
}
