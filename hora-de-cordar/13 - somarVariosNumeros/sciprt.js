"use strict"
let valores=[10,2,3,4,5,1];
let soma='';
let ress=0;
export function somar (...numeros){
    let ress=0;
    
    for (const i in numeros) {
        ress += numeros[i];
        
        if(i == numeros.length-1){
            soma += numeros[i] + ' ';
            return `${soma} = ${ress}`;
        }
        soma += numeros[i] + ' + ';
    }
    
}




