const numero= document.querySelector("#numero")
const btn_promessa= document.querySelector("#btn_promessa")

btn_promessa.addEventListener("click",evt=>{
    numero.innerHTML="Processando..."
    console.log(promessa())
    // .then(retorno=>{
    //     numero.innerHTML=retorno
    //     numero.classList.remove("erro")
    //     numero.classList.add("ok")
    // }).catch(retorno=>{
    //     numero.innerHTML=retorno
    //     numero.classList.add("erro")
    //     numero.classList.remove("ok")
    // })
})

const promessa= ()=>{
    let promise= new Promise((resolve,reject)=>{
        let resultado=false
        let tempo=3000
    
        setTimeout(()=>{
            resultado=true
            if(resultado){
                resolve("Deu tudo certo")
            }else{
                reject("Deu tudo errado")
            }
        },tempo)
    
    })

    return promise
    
}

numero.innerHTML="Esperando..."