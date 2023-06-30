const btn_alert= document.querySelector("#alert")
const btn_confirm= document.querySelector("#confirm")
const btn_prompt= document.querySelector("#prompt")

btn_alert.addEventListener("click",evt=>{
    alert("Seja Bem-vindo! Clique em prompt...")
})
btn_confirm.addEventListener("click",evt=>{
    const acesso= confirm("Você tem é maior de 18 anos?")? "permitido":"negado";
    alert(`Acesso ${acesso}!`)
    
})
btn_prompt.addEventListener("click",evt=>{
    const nome=prompt("Qual seu nome?")
    alert(`Olá ${nome}, clique em confirm para verficar sua idade!`)
})