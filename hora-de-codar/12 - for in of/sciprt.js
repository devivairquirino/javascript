"use strict"
let nomes= ['Ivair','Keke', 'Julia','Alana','Beatriz'];

// for(const index in nomes){
//     console.log(nomes[index]+" 22");
// }
// for (const i of nomes) {
//     console.log(i);
// }

const obj = document.getElementsByTagName("section");

for (const elemnto of obj) {
    console.log(elemnto);
}



const nam= document.getElementById('nome');

console.log(nam.textContent);
