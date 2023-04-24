const cursos = [...document.querySelectorAll("div.cursos")];
const radio = [...document.querySelectorAll("input[type=radio]")];
const btn_add_antes= document.querySelector('#adc_antes');
const btn_add_depois= document.querySelector('#adc_depois');
const btn_remover= document.querySelector("#remover");
const entrada= document.querySelector("#ientrada");
const boxCurso= document.querySelector("#box2");
// para caixa inteira selecionar o radio
cursos.map((el,i)=>{
    el.addEventListener("click",(event)=>{
        
        radio[i].checked=true;
    })
});

btn_add_antes.addEventListener("click",()=>{
    if(entrada.value!==""){
        const novoCuros=criarCurso(entrada.value);
        const radioSel= radioSelecionado(radio).parentNode;
        boxCurso.insertBefore(novoCuros,radioSel);
        

    }
    else{
        alert("Digite o nome do curso por favor!");
    }  
})
btn_add_depois.addEventListener("click",()=>{
    if(entrada.value!==""){
        const novoCuros=criarCurso(entrada.value);
        const radioSel= radioSelecionado(radio).parentNode;
        boxCurso.insertBefore(novoCuros,radioSel.nextSibling);
        

    }
    else{
        alert("Digite o nome do curso por favor!");
    }  
})


function criarCurso(nome){
        const novoCurso= document.createElement("div");
        novoCurso.setAttribute("class","cursos");

        const novoParagrafo= document.createElement("p");
        novoParagrafo.textContent=nome;
        novoCurso.appendChild(novoParagrafo);

        const novoRadio= document.createElement("input");
        novoRadio.setAttribute("type","radio");
        novoRadio.setAttribute("name","curso");
        novoCurso.appendChild(novoRadio);
        novoCurso.addEventListener("click",()=>{
            novoRadio.checked=true;
        })

        return novoCurso;
}

function remover(){
    const radioSel= radioSelecionado(radio).parentNode;
    radioSel.remove();
}
btn_remover.addEventListener("click",
remover);

function radioSelecionado(radios){
    const radioSel= radios.filter(el=>{   
        if(el.checked){ 
            return el;
        }
    })
    return radioSel[0];
}