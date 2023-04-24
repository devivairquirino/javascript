const caixa1= document.querySelector('#caixa1');
const caixa2= document.querySelector('#caixa2');
const btn= document.querySelector('#btn_copiar');
const todosCursos=[...document.querySelectorAll(".curso")];
todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
       const curso=evt.target; 
       curso.classList.toggle("selecionado");
       curso.classList.toggle("nao-selecionado");
    })
})
btn.addEventListener("click",()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")];
    const cursosNaoSelecionados=[...document.querySelectorAll(".curso:not(.nao-selecionado)")];
    console.log(cursosNaoSelecionados); 
    cursosSelecionados.map(el=>{
        caixa2.appendChild(el);
    })
    cursosNaoSelecionados.map(el=>{
        caixa1.appendChild(el);
    })
})