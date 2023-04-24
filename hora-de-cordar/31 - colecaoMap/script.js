const box= document.querySelector(".box");

let mapa= new Map();
mapa.set("Ivair",27)
mapa.set("Kethellen",18)
mapa.set("CSS",50)
mapa.forEach((el,i)=>{
    console.log("Index: "+i +el)
})
mapa.set(true,10)


console.log(mapa.has('Kethellen'))
console.log(mapa.keys())
console.log(mapa.size)
console.log(mapa.values())
console.log(mapa);