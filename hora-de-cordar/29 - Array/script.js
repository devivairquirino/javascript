const box= document.querySelector(".array");
let maior=[false,false,false,true,true]
let idades=[10,1,15,18,18,maior]
let clientes=["Alana","Bianca","Carla","Kethellen",idades];

// clientes.push("Pedro");

clientes.unshift("Amanda");
console.log(clientes[5][5][4])
clientes.map(el=>{
    const p= document.createElement("p");
    p.innerHTML="- "+el;
    box.appendChild(p);
})