const i_senha= document.querySelector('#i_senha')
const senha_forte= document.querySelector(".senha_forte")
const p_requi= [...document.querySelectorAll(".requisitos")]

i_senha.addEventListener("focus",()=>{
  senha_forte.style.display="block"
})
i_senha.addEventListener("blur",()=>{
    senha_forte.style.display="none"
  })
p_requi.forEach(c=>{
    console.log(c)
})

// /(.{6,})/ minimo 6
// /(\W{1,})/ minimo 1 caracter especial
// /([0-9]{1,})/ minimo 1 numero
// /([A-Z]{1,})/ letra maiuscula


i_senha.addEventListener("keyup",()=>{
    const regExp=[/(.{6,})/,/(\W{1,})/,/([0-9]{1,})/,/([A-Z]{1,})/]
    const senha= i_senha.value

    regExp.forEach((reg,i)=>{
        if(reg.test(senha)){
            p_requi[i].classList.add("aprovado")
        }
        else{
            p_requi[i].classList.remove("aprovado")
        }
    })
})
// p_requi[0].classList.add("aprovado")
// p_requi[0].classList.add("aprovado")