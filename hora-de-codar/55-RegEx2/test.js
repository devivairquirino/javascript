const num="1233-10200-1002-2201003"

// o ? retorna o numero ou a combinaçao deles
console.log(num.match(/23?/g))
// o * retorna o numero ou a combinaçao deles, mas diferente do ? ele tambem retornar os subsequente que se repetirem
console.log(num.match(/23*/g))
// o + retorna o numero e se tiver repetido na sequencia
console.log(num.match(/0+/g))


// regra 
//  /1/ o numero
//  /1+/ o numero e mais repetidos
//  /12?/ o primeiro numero ou a combinacao deles
//  /12*/ é o + e o ? juntos .


const i_texto= document.querySelector("#texto")
const ress= document.querySelector("#ress")

const btn_enviar= document.querySelector("button")

btn_enviar.addEventListener("click",evt=>{
    let texto=i_texto.value
    const regex=/cu|caralho|vadia|puta/g
    const palavrao= regex.test(texto)
    if(palavrao){
        texto=texto.replace(/[a-z]/ig,"*")
        ress.innerHTML+=texto+"<br>"
    }
    else{
        ress.innerHTML+=texto+"<br>"
    }
    i_texto.value=""
})

const frase= "Hoje esta muito frio e eu estou com calor. Essencial"
const reg= /^hoje/ig
const reg2=/calor$/ig
console.log(reg.test(frase))
console.log(reg2.test(frase))


console.log(frase.match(/[^(eam)]/g))

console.log(frase.match(/s{2}/g))

const email= "ivair.quirino@gmail.com"
const regEmail=/([a-z0-9\.\-\_]{2,})@([a-z0-9]{2,})(\.[a-z]{2,})(\.[a-z]{2,})?/g
console.log(email.match(regEmail))
const regTel=new RegExp(/\(([0-9]{2})\)\s?(9{1})?([0-9]{4}\-[0-9]{4})/
)
const tel="(14) 99136-7741"
console.log(regTel.test(tel))

// reg exp telefone
// \(([0-9]{2})\)\s?(9{1})?([0-9]{4}\-[0-9]{4})

// reg cpf
// /([0-9]{3})\.([0-9]{3})\.([0-9]{3})\-([0-9]{2})/g

// ([A-Z]{1,}) letra maiuscula
// (.{6,}) minimo 6
// ([0-9]{1,}) minimo 1 numero
// (\W{1,}) minimo 1 caracter especial

const testSenha= [/.{6,}/,/[A-Z]{1,}/,/[0-9]{1,}/,/\W{1,}/]


const senha="dek"
console.log("senha:")
testSenha.forEach(t=>{
    console.log(t.test(senha))
})
