const teclasNum= [...document.querySelectorAll(".num")]
const teclasop= [...document.querySelectorAll(".op")]
const tigual= document.querySelector(".ress")
const display= document.querySelector(".display")
const tcopy= document.querySelector("#tcopy")
const tlimpar= document.querySelector("#tlimpar")
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
})