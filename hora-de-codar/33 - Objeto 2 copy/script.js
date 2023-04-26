const inputNome= document.querySelector("#nome");
const inputIdade= document.querySelector("#idade");
const adicionar= document.querySelector("button");
const resultado= document.querySelector("#ress");

function Clientes (nome,idade){
    this.nome=nome,
    this.idade=idade,        
    this.info=()=>{
        return `Nome: ${this.nome} Idade: ${this.idade}`;
    },
    this.exibirDados=function(){
        const novaCaixa = new criarBox(`Nome: ${this.nome}`,`Idade: ${this.idade}`);
        return novaCaixa.box;
    }
    
}
class criarBox{
    constructor(str1,str2){
        this.box= document.createElement("div");
        this.box.setAttribute("class","clientes");

        this.box.appendChild(this.criarPag(str1))
        this.box.appendChild(this.criarPag(str2))
        
    }
    criarPag(texto){
        const pag= document.createElement("p");
        pag.textContent= texto;
        return pag;
    }
}



adicionar.addEventListener("click",()=>{
    if(inputNome.value==="" || inputIdade.value===""){
        alert("Por favor preencha todos os campos!")
    }
    else{
        const cliente= new Clientes(inputNome.value,inputIdade.value);
       resultado.appendChild(cliente.exibirDados());
    }
})