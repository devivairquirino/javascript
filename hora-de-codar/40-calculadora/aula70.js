const teclasNum= [...document.querySelectorAll(".num")]
const teclasop= [...document.querySelectorAll(".op")]
const teclaRess= document.querySelector(".ress")
const display= document.querySelector(".display")
const ton= document.querySelector("#ton")
const tlimpar= document.querySelector("#tlimpar")
let ligado= true
let isOtherNumber= true
teclasNum.forEach(el=>{
    el.addEventListener("click",evt=>{
        if(ligado){
           
            if(evt.target.innerHTML==","){
                if(isOtherNumber){
                    let isANumber= Number(display.innerHTML.slice(-1))
                    if(isANumber*0==0){
                        isOtherNumber=false
                        display.innerHTML+=evt.target.innerHTML
                    }
                }
           }
           else{
                limpar0();
                display.innerHTML+=evt.target.innerHTML
           }
            
        }
    })
})
teclasop.forEach(el=>{
    el.addEventListener("click",evt=>{
        if(ligado){
            let ultimoDig=display.innerHTML.slice(-1)
            let isANumber= Number(ultimoDig)
            if(isANumber*0==0||ultimoDig=="("||ultimoDig==")"){
                isOtherNumber=true
                display.innerHTML+=evt.target.innerHTML
            }
        }
    })
})

tlimpar.addEventListener("click",evt=>{
    if(ligado){
        display.innerHTML="0";
    }
})
ton.addEventListener("click",evt=>{
    if(display.innerHTML==""){
        display.innerHTML="0"
        display.classList.toggle("desligado")
        ligado=true
    }
    else{
        display.innerHTML=""
        display.classList.toggle("desligado")
        ligado=false
    }
})
teclaRess.addEventListener("click",()=>{
    limparDisplay();
    
}
)




function limpar0(){
    if(display.innerHTML=="0"){
        display.innerHTML="";
    }
}
const limparDisplay= ()=>{
    display.innerHTML="";
}