const inputNome= document.querySelector("#nome");
const inputIdade= document.querySelector("#idade");
const adicionar= document.querySelector("button");
const resultado= document.querySelector("#ress");

let Clientes={
    nome,
    idade,
    getNome: function(){
        return this.nome;
    },
    getIdade:function(){
        return this.idade;
    },
    setNome:function(nome){
        this.nome=nome;
    },
    setIdade:function(idade){
        this.idade=idade;
    }
}
let CriarBox= {
    div:function(str1,str2){
        const box= document.createElement("div");
        box.setAttribute("class","clientes");
        box.appendChild(this.paragrafo(str1));
        box.appendChild(this.paragrafo(str2));
        return box;
        
    },
    paragrafo:function(texto){
        const pag= document.createElement("p");
        pag.innerHTML= texto;
        return pag
    }
}


adicionar.addEventListener("click",()=>{
    Clientes.setNome(inputNome.value);
    Clientes.setIdade(inputIdade.value);
    const tNome= Clientes.getNome();
    const tIdade= Clientes.getIdade();
    
    const newBox= CriarBox.div(tNome,tIdade);

    resultado.appendChild(newBox);
})