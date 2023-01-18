function verificar(){
    //Endereço dos campos
    const convidado= document.getElementById('nomeConvidado')
    const convite=document.getElementById('nomeConvite');
    //Endereço do paragrafo onde sai a resposta
    const ress=document.getElementById('result')

    //Valor dos campos
    const nomeConvidado = convidado.value.toLowerCase();
    const nomeConvite = convite.value.toLowerCase();
    
    //Colocar para minusculo
   
    
    //Lista dos convidados
    const convidados={
        ivair:['carla','joice'],
        kethellen:['tu','cirsa','pedro'],

    }
    //Procurar nome da lista
    const encontrouLista=convidados[nomeConvite];

    if (!encontrouLista){
        ress.innerHTML=`Desculpe a lista de convidado de "${nomeConvite}" não foi encontrada!`
    }
    else{
        //Procura  o nome do convidado na lista
        const encontrouConvidado= encontrouLista.indexOf(nomeConvidado);
        
        if(encontrouConvidado===-1){
            ress.innerHTML=`Desculpe o convidado "${nomeConvidado}" não foi encontrado nessa lista.`;
        }
        else{
            ress.innerHTML=`Seja bem vindo Sr(a) ${nomeConvidado}. Você pode entrar!`
        }
    }
   const lista=[1,2,3,4,5];
   // usar includes no lugar de indexof
   console.log(lista.includes(7))

}