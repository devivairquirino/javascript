const teclasNum= [...document.querySelectorAll(".num")]
const teclasop= [...document.querySelectorAll(".op")]
const tigual= document.querySelector(".ress")
const display= document.querySelector(".display")
const tcopy= document.querySelector("#tcopy")
const tlimpar= document.querySelector("#tlimpar")
const calc= document.querySelector(".calc")
const aba_calc= document.querySelector(".aba-calc")
const img_aba_calc= document.querySelector("#img_aba_calc")
let sinal= false
let decimal= false

teclasNum.forEach(el=>{
    el.addEventListener("click",evt=>{
        sinal=false
        
        if(evt.target.innerHTML==","){
            if(!decimal){
                decimal=true
                display.innerHTML+=evt.target.innerHTML
            }
        }
        else{
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            display.innerHTML+=evt.target.innerHTML
        }

        
    })
})
teclasop.forEach(el=>{
    el.addEventListener("click",evt=>{
        if(!sinal){
            sinal=true
            decimal=false
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }

                display.innerHTML+=evt.target.innerHTML
            
            
        }
    })
})

tlimpar.addEventListener("click",evt=>{
        sinal=false
        decimal=false
        display.innerHTML="0"
})
tigual.addEventListener("click",()=>{
    sinal=false
    decimal=false
    const conta= display.innerHTML.replace(/,/g, ".").replace(/x/g,"*")
    const ress= eval(conta)
    display.innerHTML=ress
}
)

tcopy.addEventListener("click",evt=>{
    navigator.clipboard.writeText(display.innerHTML)
    tcopy.classList.toggle("visible")
    setTimeout(hidden,800)

})
const hidden= function(){
    tcopy.classList.toggle("visible");

}
aba_calc.addEventListener("click",evt=>{
    if(calc.classList.contains("calc_exibir")){
        img_aba_calc.setAttribute("src","seta_direita.svg")
    }
    else{
        img_aba_calc.setAttribute("src","seta_esquerda.svg")
    }
    calc.classList.toggle("calc_exibir")
    
})