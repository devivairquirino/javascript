const box2= document.querySelector("#box2");
const cursos= ['SCRUM'];
const btn_selecionar= document.querySelector("#selecionado")
const btn_add_antes= document.querySelector('#adc_antes');
const btn_add_depois= document.querySelector('#adc_depois');
const btn_remover= document.querySelector("#remover");
const cursoPreAdd= [...document.querySelectorAll(".cursos")]
const entrada= document.querySelector("#ientrada");
// Usado para criar cursos
const criarCurso= (nome)=>{
    const novoCurso= document.createElement("div");
    novoCurso.setAttribute("class","cursos");

    const paragrafo= document.createElement('p');
    paragrafo.textContent= nome;
    novoCurso.appendChild(paragrafo)

    novoCurso.addEventListener("click",()=>{
        limparSelecionados()
        novoCurso.classList.toggle('selecionado');
    })
    return novoCurso;
}
box2.appendChild(criarCurso(cursos));
const limparSelecionados= ()=>{
    const selecionados= [...document.querySelectorAll(".selecionado")];
    selecionados.map(el=>{
        el.classList.remove("selecionado")
    })
}

// Seleciona ao clicar nos curso adicionados via HTML
cursoPreAdd.map(el=>{
    el.addEventListener("click",()=>{
        limparSelecionados()
        el.classList.toggle('selecionado');
    })
})

cursos.map(el=>{
    criarCurso(el,box2)
})

btn_selecionar.addEventListener("click",()=>{
    const selecionado= document.querySelector(".selecionado");

    alert("O curso de "+selecionado.firstElementChild.innerHTML+" foi selecionado com sucesso!");
})
btn_remover.addEventListener("click",()=>{
    const selecionado = document.querySelector(".selecionado");

    selecionado.remove();
})

btn_add_antes.addEventListener("click",()=>{
    const selecionado= document.querySelector(".selecionado");
    const textoCurso = entrada.value;
    const novoCurso = criarCurso(textoCurso);
    
    if(textoCurso!==""){
        box2.insertBefore(novoCurso,selecionado)
    }
    else{
        alert("Por favor digite o nome do curso!")
    }
    
})
btn_add_depois.addEventListener("click",()=>{
    const selecionado= document.querySelector(".selecionado");
    const textoCurso = entrada.value;
    const novoCurso = criarCurso(textoCurso);
    
    if(textoCurso!==""){
        box2.insertBefore(novoCurso,selecionado.nextElementSibling)
    }
    else{
        alert("Por favor digite o nome do curso!")
    }
    
})