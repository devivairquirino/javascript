const newElemnt= document.createElement('div');
const box= document.querySelector('#caixa1');
const cursos= [...document.querySelectorAll('.curso')];
const textCurso=["HTML","CSS","JavaScript","PHP","React","MySQL","ReactNative"];


// caixa1.appendChild(newElemnt);

// newElemnt.innerHTML='ReactNative';

// newElemnt.setAttribute("class","c1 curso");
// newElemnt.setAttribute("id","c7");
// Adcicionando dinamicamente
textCurso.map((element,index)=>{
    const novoEl= document.createElement("div");
    const btn_lixeira= document.createElement('img');
    const lixeira= [...document.querySelectorAll('.btn_lixeira')]

    btn_lixeira.setAttribute("src","./lixeira.png");
    btn_lixeira.setAttribute("alt","Lixeira");
    btn_lixeira.setAttribute("class","btn_lixeira");

    novoEl.textContent=element;
    novoEl.setAttribute("class",`curso c1`);
    novoEl.setAttribute("id","c"+(index+1));

    novoEl.appendChild(btn_lixeira);

    btn_lixeira.addEventListener("click",(event)=>{
        box.removeChild(event.target.parentNode);
    })

    caixa1.appendChild(novoEl);
})