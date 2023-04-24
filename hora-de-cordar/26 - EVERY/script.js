const p_array= document.querySelector("#array");
const txt_pesquisar = document.querySelector("#txt_pesquisar");
const btn= document.querySelector("#btn_pesquisar");
const ress= document.querySelector("#resultado");

const el_arrays = [100,50,17,23,40,30,18,20];

p_array.innerHTML= "[ "+el_arrays+" ]";

btn.addEventListener("click",()=>{
    
    const ret=el_arrays.every((el,i)=>{
        if(el<18){
            ress.innerHTML=`O valor ${el} está incorreto, e encontra-se na poscição ${i}`;
        }
        return el>=18
    })
    if(ret){
        ress.innerHTML="Array correto!"
    }

})


// map: é usado quando você precisa excutar alguma tarefa em cada elemento do array, retorna o array modificado
// filter : é usado quando você precisa selecionar alguns elementos de um array por meio de um filtro, retorna um novo array com os elementos filtrados
// find : é usado para encontrar um valor dentro de um array, retorna o elemento se encontrado, caso não retorna undefined.
//every: é usado para verificar se todos os itens da lista respeitam a regra da função, caso sim retorna true caso nao false