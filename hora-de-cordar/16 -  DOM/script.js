let x=1;
let id= `d${x}`;
let divs= document.getElementById(id);
let array=[];
// declarar variaveis com nomes numeros1,2,3 etc
while(divs!==null){
    id= `d${x}`;
    divs= document.getElementById(id); 
    let name= `numero${x}`
    array.push(window[name]=divs)

    
    x++;
}
array.map(e=>console.log(e.textContent));



