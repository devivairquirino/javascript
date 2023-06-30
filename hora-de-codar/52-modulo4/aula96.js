import Contatos from "./contatos.js"

const listaContatos= document.querySelector("#listaContatos")
const btn_gravar= document.querySelector("#btn_gravar")

btn_gravar.addEventListener("click",()=>{
    const cont={
        nome:document.querySelector("#f_nome").value,
        telefone:document.querySelector("#f_telefone").value,
        email:document.querySelector("#f_email").value
    }
    Contatos.addContato(cont,listaContatos)
})
