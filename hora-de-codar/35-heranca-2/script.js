const boxCarros= document.querySelector(".ress");
const botao= document.querySelector("#add");
const botaoRemover= document.querySelector("#remove")

class Carro{ //Classe PAI
    constructor(nome,portas){
        this.nome=nome;
        this.portas=portas;
        this.ligado=false;
        this.vel=0;
        this.cor=undefined;
    }
    ligar= function(){
        this.ligado=true;
    }
    desligar= function(){
        this.ligado=false;
    }
    setCor= function(cor){
        this.cor=cor;
    }
}
class Militar extends Carro{
    constructor(nome,portas,blindagem,municao){
        super(nome,portas);
        this.blindagem=blindagem;
        this.municao=municao;
        this.setCor("Verde");
        
    }
    atirar= function(){
        if(this.municao>0){
            this.municao--;
        }
        else{
            alert("Sem munição. Recarregue!");
        }
    }
    recarregar= function(){
        if(this.municao===0){
            this.municao=10;
        }
    }
}
const car1= new Carro("Camaro",2);
car1.setCor("Amarelo");
car1.ligar();

const car2= new Militar("Lutador",1,100,1);

const radios= [...document.querySelectorAll("[name=tipo]")];
const blind= document.querySelector("#blindagem");
const muni= document.querySelector("#municao");
radios.map(el=>{
    el.addEventListener("click",()=>{
        if(radios[1].checked){
            blind.disabled="true";
            muni.disabled="true";
        }
        else{
            blind.removeAttribute("disabled");
            muni.removeAttribute("disabled");
        }
    })
});


let carros=[];
botao.addEventListener("click",()=>{
    const iNome= document.querySelector("#nome");
    const iPortas= document.querySelector("#portas");
    const iBlind= document.querySelector("#blindagem");
    const iMuni= document.querySelector("#municao");
    
    // const tipoSel= document.querySelector("[name=tipo]:checked");

    if(iNome.value!==""){
        if(radios[0].checked){
            const c=new Militar(iNome.value, iPortas.value,iBlind.value,iMuni.value)
            carros.push(c);
        }else{
            const c= new Carro(iNome.value, iPortas.value);
            carros.push(c)
        } 

        criarDiv();
    }
    else{
        alert("Insira o nome do veículo!")
    }
})

function criarDiv(){
    boxCarros.innerHTML=""
    carros.forEach(c=>{
        const card= document.createElement("div");
        card.innerHTML=`
        <span>Nome:</span> ${c.nome} <br> 
        <span>Portas:</span> ${c.portas} <br> 
        <span>Cor:</span> ${c.cor==undefined?"sem cor":c.cor} <br> 
        <span>Blindagem:</span> ${c.blindagem==undefined?0:c.blindagem} <br> 
        <span>Munição:</span> ${c.municao==undefined?0:c.municao}`
        card.addEventListener("click",evt=>{
            // limparSel();
            card.classList.toggle("selecionado");
        })
        boxCarros.appendChild(card);
    })
}

botaoRemover.addEventListener("click",evt=>{
    const a_divCarro=[...boxCarros.children];
    let count=0;
    a_divCarro.forEach((c,i)=>{
        
        if(c.classList.contains("selecionado")){
            
            carros.splice(i-count,1);
            count++;
        }
        criarDiv();
    })
    

})

function limparSel(){
    const selecionado= document.querySelector(".selecionado");
    if(selecionado!=undefined){
        selecionado.classList.remove("selecionado");
    }
}

