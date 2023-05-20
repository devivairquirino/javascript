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

const botao= document.querySelector("button");
let carros=[];
botao.addEventListener("click",()=>{
    const iNome= document.querySelector("#nome");
    const iPortas= document.querySelector("#portas");
    const iBlind= document.querySelector("#blindagem");
    const iMuni= document.querySelector("#municao");
    const boxCarros= document.querySelector(".ress");
    // const tipoSel= document.querySelector("[name=tipo]:checked");

    if(iNome.value!==""){
        const carNovo= radios[0].checked ? new Militar(iNome.value, iPortas.value,iBlind.value,iMuni.value): new Carro(iNome.value, iPortas.value);

        boxCarros.appendChild(criarDiv(carNovo.nome));


        carros.push(carNovo); 
        console.log(carros);
    }
    else{
        alert("Insira o nome do veículo!")
    }
})

function criarDiv(nome,portas,cor,blindagem,municao){
    const card= document.createElement("div");
    card.innerHTML=`
    <span>Nome:</span> ${nome} <br> 
    <span>Portas:</span> ${portas} <br> 
    <span>Cor:</span> ${cor} <br> 
    <span>Blindagem:</span> ${blindagem} <br> 
    <span>Munição:</span> ${municao}`

    return card;
}