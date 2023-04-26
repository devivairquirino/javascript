const vrl1= document.querySelector("#valor1");
const vrl2= document.querySelector("#valor2");
const ress= document.querySelector("#resultado");

const btns= [...document.querySelectorAll("button")];


const op= [
    arrayNum=>{
        return arrayNum.reduce((n1,n2)=>n1+n2);
    },
    arrayNum=>{
        return arrayNum.reduce((n1,n2)=>n1-n2);
    },
    arrayNum=>{
        return arrayNum.reduce((n1,n2)=>n1*n2);
    },
    arrayNum=>{
        return arrayNum.reduce((n1,n2)=>n1/n2);
    }
]

btns.map((bt,index)=>{
    bt.addEventListener("click", ()=>{
        const numeros=[Number(vrl1.value),Number(vrl2.value)];
        
        ress.value= op[index](numeros);
    })
})
