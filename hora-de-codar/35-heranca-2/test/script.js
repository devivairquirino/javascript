const bt_cont= document.querySelector("#continuar")

const bt_rem= document.querySelector("#remover")

const index= [0,1,2,3,4,5,6,7,8,9];

const dados= ["a",'b','c','d','e','f','g',"h","i",'j']
let count= 0;
bt_cont.addEventListener("click",()=>{
    console.log(`i:${index[count]} dados:${dados[count]}`);
    
    count++;
})
let num=0
bt_rem.addEventListener("click",()=>{
   count--;

    dados.splice(count,1)
    console.log("removido!"+num)
    num--

})