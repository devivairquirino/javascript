const nome= Symbol("nome")
const numero=Symbol("numero")
const corUniforme= Symbol("cor")

console.log(nome.description)
const Jogador={
    [nome]:"j1",
    numero:10,
    corUniforme:"amarelo"
}
for(p in Jogador){
    console.log(Jogador[p])
}
