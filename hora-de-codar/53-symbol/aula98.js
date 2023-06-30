const s1= Symbol()
const s2= Symbol()
const s3= Symbol.for("code")
const s4= Symbol.for("code")

console.log(s1==s2)
console.log(s3==s4)

console.log(Symbol.keyFor(s3))

class Jogador {
    constructor(nome){
        this.nome=nome
        this.id=Symbol()
    }
}
const numJog=5
let jogadores=[]
for(let i= 0; i<numJog;i++){
    jogadores.push(new Jogador("j"+i))
    if(i%2!=0){
        jogadores.push(new Jogador("j"+i))
    }
}
console.log(jogadores)
const sym1= jogadores[2].id

jogadores=jogadores.filter(j=>{
    return j.id!=sym1
})
console.log(jogadores) 

let s=[]

let s_jogadores= jogadores.filter(j=>{
    return j.nome=="j3"
})
s=s_jogadores.map(j=>{
    return j.id
})
console.log(s)