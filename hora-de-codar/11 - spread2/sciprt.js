const soma= (v1,v2,v3)=>{
    return v1+v2+v3;
}
const numeros=[3,1,4];
// o spread(...)espalhos os elementos do array no parametro da função
console.log(soma(...numeros));

const obj1=document.getElementsByTagName("section");
const obj2= [...document.getElementsByTagName("section")];

obj2.forEach((element) => {
    
    console.log(element );
});

