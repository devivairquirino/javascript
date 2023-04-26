const p_array= document.querySelector("#array");
const txt_pesquisar = document.querySelector("#txt_pesquisar");
const btn= document.querySelector("#btn_pesquisar");
const ress= document.querySelector("#resultado");

const el_arrays = [10,5,8,23,4,3,1,2];

p_array.innerHTML= "[ "+el_arrays+" ]";

btn.addEventListener("click",()=>{
    ress.innerHTML="Valor foi não encontrado!"
    const ret=el_arrays.find((el,i)=>{
        if(el==txt_pesquisar.value){
            ress.innerHTML= "Valor "+el+" foi encontrado na posição "+i
            return el
        }
    })
    console.log(ret)
})


// map: é usado quando você precisa excutar alguma tarefa em cada elemento do array, retorna o array modificado
// filter : é usado quando você precisa selecionar alguns elementos de um array por meio de um filtro, retorna um novo array com os elementos filtrados
// find : é usado para encontrar um valor dentro de um array, retorna o elemento se encontrado, caso não retorna undefined.