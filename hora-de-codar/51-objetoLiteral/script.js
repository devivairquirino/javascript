const visor= document.querySelector("#objeto")

const computador={
    cpu:"i9",
    ram:"128gb",
    ssd:"10tb"
}
const computadores=[
    {
        cpu:"i7",
        ram:"64gb",
        ssd:"5tb"
        
    },
    {
        cpu:"i3",
        ram:"16gb",
        ssd:"1tb"
        
    },
    {
        cpu:"i9",
        ram:"128gb",
        ssd:"10tb"
        
    }
]
let pc =1
computadores.forEach(c=>{
    c.placa_vzzideo="rtx4080ti"
    visor.appendChild(divDados(c))
    pc++
})


function divDados(objeto){
    const div= document.createElement("div")
    for(const key in objeto){
        div.innerHTML+=`${key}: ${objeto[key]}<br>`
    }
    return div
}

const c1= Object.assign({},computador)
c1.cpu="i7"
console.log(c1)

const o1={obj1:1}
const o2={obj2:2}
const o3={obj3:3}
const o4=Object.assign(o1,o2,o3)
console.log(o4)

const test= Object.create(computador)


console.log(test)

