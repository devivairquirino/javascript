const numObj= document.querySelector("#numObjects");
const qtdObj= document.querySelector("#qtdObjects")
const btnAdc= document.querySelector("#btnAdicionar")
const btnRem= document.querySelector("#btnRemover")
const visorBolas= document.querySelector("#bolas")

class Bola{
    constructor(numCor,tam,vel,mov,direcao){
        switch (numCor){
            case 0:
                this.cor="blue"
                break
            case 1:
                this.cor="pink"
                break
            case 2:
                this.cor="yellow"
                break
            case 3:
                this.cor="orange"
                break
            case 4:
                this.cor="purple"
                break
            default:
                this.cor="red"
        }
        this.tam=tam
        this.vel=vel
        this.mov=mov
        this.direcao=direcao
    }
}
let bolas=[]

btnAdc.addEventListener("click",evt=>{
    const qtd= qtdObj.value
    for(let i=0;i<qtd;i++){
        const cor=Math.floor(Math.random()*6)
        const tam= Math.floor(Math.random()*35
        +15)+"px"
        const vel=Math.floor(Math.random()*17+3)+"s"
        const mov="mov"+Math.floor(Math.random()*3+1)
        console.log(vel)
        const direcao= Math.floor(Math.random()*2)?"alternate":"alternate-reverse";
        const bola= new Bola(cor,tam,vel,mov,direcao);
        bolas.push(bola)
    }
    
    numObj.value=bolas.length
    exibir(bolas);
})


function exibir(bolas){
    visorBolas.innerHTML=""
    bolas.forEach(b=>{
        const div= document.createElement("div")
        div.style.backgroundColor=b.cor
        div.style.width=b.tam
        div.style.height=b.tam
        div.style.animationName=b.mov;
        div.style.animationDuration=b.vel;
        div.style.animationDirection=b.direcao;
        visorBolas.appendChild(div)
    })

}
btnRem.addEventListener("click",evt=>{
    
    bolas=[];
    numObj.value=0
    visorBolas.innerHTML=""
})