let conta="2+55x2+90"

let array= [...conta]
let acumulador=""
let numero= []
let numAnt=0;

array.forEach((char,i)=>{
    let isANumber= Number(char)*0
    if(isANumber!==0){
        if(acumulador!=""){
            numAnt=acumulador
            numero.push(acumulador)
        }
        acumulador=""
    }
    else{  
        acumulador+=char
        if(i==array.length-1){
            numero.push(acumulador)
        }
    }
})
console.log(numero
)
