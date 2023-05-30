const f_tipoMilitar= document.querySelector("#militar")
const f_tipoNormal= document.querySelector("#normal")
const f_blindagem= document.querySelector("#blindagem")
const f_municao= document.querySelector("#municao")
const f_nome=document.querySelector("#nome")
const f_portas=document.querySelector("#portas")
const carros=document.querySelector("#carros")
const btn_addCarros=document.querySelector("#adc")
let a_carros=[]

f_tipoMilitar.addEventListener("click",(evt)=>{
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})
f_tipoNormal.addEventListener("click",(evt)=>{
    f_blindagem.setAttribute("disabled","disabled")
    f_blindagem.value=0
    f_municao.setAttribute("disabled","disabled")
    f_municao.value=0
})

const gerenciarExibicaoCarros=()=>{
    carros.innerHTML=""
    a_carros.forEach(c=>{
        const div=document.createElement("div");
        div.setAttribute("class","carro")
        div.innerHTML= `
        <span>Nome:</span> ${c.nome} <br> 
        <span>Portas:</span> ${c.portas} <br> 
        <span>Cor:</span> ${[c.cor==undefined?"Sem Cor":c.cor]} <br> 
        <span>Blindagem:</span> ${[c.blindagem==undefined?0:c.blindagem]} <br> 
        <span>Munição:</span> ${c.municao==undefined?0:c.municao}`;
        carros.appendChild(div);
        console.log(c)
    })
    
}

btn_addCarros.addEventListener("click",evt=>{
    if(f_tipoNormal.checked){
        const c= new Carro(f_nome.value,f_portas.value)
        a_carros.push(c)
    }else{
        const c= new Militar(f_nome.value,f_portas.value,f_blindagem.value,f_municao.value)

        a_carros.push(c)
    }
    gerenciarExibicaoCarros()
})

class Carro{
    constructor(nome,portas){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }
    ligar=function(){
        this.ligado-true
    }
    desligar=function(){
        this.ligado=false
    }
    setCor=function(cor){
        this.cor=cor
    }

}

class Militar extends Carro{
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem=blindagem
        this.municao=municao
    }
}