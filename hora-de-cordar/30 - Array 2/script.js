const box= document.querySelector(".array");
const botoes= [...document.querySelectorAll("button")];
const entrada= document.querySelector("#ientrada");



const op=[ent=>{
      return ent.reduce((n1,n2)=>n1+n2);
},ent=>{
    return ent.reduce((n1,n2)=>n1-n2);
},ent=>{
    return ent.reduce((n1,n2)=>n1*n2);
},ent=>{
    return ent.reduce((n1,n2)=>n1/n2);
}
]

botoes.map((bt,i)=>{
    bt.addEventListener("click",()=>{
        if(!entrada.value.includes(bt.textContent)){
            entrada.value+= bt.textContent;
        }
        else{
            const entradaNum= entrada.value.split(/\D/);
            const arrayNum= entradaNum.map(Number);

            box.innerHTML= op[i](arrayNum);
           
        }
    })
})