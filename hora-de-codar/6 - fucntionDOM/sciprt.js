const list  = document.createElement('ul');

const compras= ['Laranja','Maçã','Pera','Iorgute','Frango'];

criarLista(list);
document.body.appendChild(list);

function criarLista(lista){
    for(let i=0;i<compras.length;i++){
        let texto= compras[i];
        let itens = document.createElement('li');
        
        itens.innerHTML=texto;
        lista.appendChild(itens);
    }
    return lista;

}