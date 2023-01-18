//Faixa de Preço

function FaixaPreco(tooltip,min,max){
    this.tooltip=tooltip,
    this.min=min,
    this.max=max
}
let faixas=[
    new FaixaPreco('até 700',0,700),
    new FaixaPreco('até 700',0,700)
]
console.log(faixas);