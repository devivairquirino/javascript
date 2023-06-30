import { contatos as agenda} from "./bancoContatos.js"

class Contatos {
    constructor(){
    }
    static contatos=agenda
    static getTodosContatos(){
        return this.contatos
    }
    static getContatos(i_contato){
        return this.contatos[i_contato]
    }
    static gerenciarExibicao(destinoDOM){
        destinoDOM.innerHTML=""
        this.contatos.forEach(c=>{
            const div= document.createElement("div")
            div.setAttribute("class","contato")

            const p_nome=document.createElement("p")
            p_nome.innerHTML=c.nome

            const p_telefone=document.createElement("p")
            p_telefone.innerHTML=c.telefone

            const p_email=document.createElement("p")
            p_email.innerHTML=c.email

            const p_delete= document.createElement("span")
            p_delete.innerHTML="x"

            p_delete.addEventListener("click",evt=>{
                div.remove()
                this.contatos=this.contatos.filter(cont=>{
                    return cont!==c
                })
            })
            
            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_email)
            div.appendChild(p_delete)

            destinoDOM.appendChild(div)

        })
    }
    static addContato(novoContato, destinoDOM){
        this.contatos.push(novoContato)
        this.gerenciarExibicao(destinoDOM)
    }
}

export default Contatos
// class Contatos {
//     constructor(arrayContatos){
//         this.contatos=arrayContatos
//     }
    
//     getTodosContatos(){
//         return this.contatos
//     }
//     getContatos(i_contato){
//         return this.contatos[i_contato]
//     }
//     gerenciarExibicao(destinoDOM){
//         destinoDOM.innerHTML=""
//         this.contatos.forEach(c=>{
//             const div= document.createElement("div")
//             div.setAttribute("class","contato")

//             const p_nome=document.createElement("p")
//             p_nome.innerHTML=c.nome

//             const p_telefone=document.createElement("p")
//             p_telefone.innerHTML=c.telefone

//             const p_email=document.createElement("p")
//             p_email.innerHTML=c.email
//             div.appendChild(p_nome)
//             div.appendChild(p_telefone)
//             div.appendChild(p_email)

//             destinoDOM.appendChild(div)
//         })
//     }
//     addContato(novoContato, destinoDOM){
//         this.contatos.push(novoContato)
//         this.gerenciarExibicao(destinoDOM)
//     }
// }
// const agenda= new Contatos(contatos)

// export default agenda