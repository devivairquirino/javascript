const box= document.querySelector('#caixa1');
const cursos= [...document.querySelectorAll('.curso')];
let x=0
box.addEventListener('click',()=>{
    x+=1;
    console.log('clicou'+x);
});
cursos.map(el=>{
    el.addEventListener("click", event=>{
        event.stopPropagation();
        
    })
})