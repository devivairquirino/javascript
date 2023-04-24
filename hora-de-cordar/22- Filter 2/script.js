const cursos = [...document.querySelectorAll("div.cursos")];
const radio = [...document.querySelectorAll("input[type=radio]")];
const btn_adicionar= document.querySelector('#adc');
const btn_remover= document.querySelector("#remover");
const entrada= document.querySelector("#ientrada");
const boxCurso= document.querySelector("#box2");
// para caixa inteira selecionar o radio
cursos.map((el,i)=>{
    el.addEventListener("click",(event)=>{
        
        radio[i].checked=true;
    })
});

btn_adicionar.addEventListener("click",()=>{
    if(entrada.value.length!=0){
        adicionar(entrada.value);
    }
    else{
        alert("Digite o nome do curso por favor!");
    }  
})








function adicionar(nome){
        const novoCurso= document.createElement("div");
        novoCurso.setAttribute("class","cursos");

        const novoParagrafo= document.createElement("p");
        novoParagrafo.textContent=nome;
        novoCurso.appendChild(novoParagrafo);

        const novoRadio= document.createElement("input");
        novoRadio.setAttribute("type","radio");
        novoRadio.setAttribute("name","curso");
        novoCurso.appendChild(novoRadio);

        boxCurso.appendChild(novoCurso);
        novoCurso.addEventListener("click",()=>{
            novoRadio.checked=true;
        })
}

function remover(){
    radio.map(el=>{
        if(el.checked===true){
            el.parentNode.remove();
        }
    })
}
btn_remover.addEventListener("click",
remover);