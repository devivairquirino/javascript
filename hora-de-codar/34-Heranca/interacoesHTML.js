let teste= 0;
export function criarCard(infoCard){
    const info=infoCard.textInfo;

    const card= document.createElement("div");
    card.setAttribute("class","card cardPequeno");

    const contentCard= document.createElement("div");
    contentCard.setAttribute("class","cardClasses");

    const header= document.createElement("div");
    header.setAttribute("class","headerCard");

    const pHeader= document.createElement("p");
    pHeader.innerHTML= infoCard.nome;

    const divElemento= document.createElement("div");
    divElemento.setAttribute("class","elemento");
    divElemento.setAttribute("id", infoCard.elemento);

    header.appendChild(pHeader);
    header.appendChild(divElemento);

    contentCard.appendChild(header);

    const input= document.createElement("input");
    input.setAttribute("type","radio");
    input.setAttribute("class","classe");
    input.setAttribute("id",infoCard.classe);

    contentCard.appendChild(input);

    const infoBox= document.createElement("div");
    infoBox.setAttribute("class","infoCard");

    const classe= infoCard.classe[0].toUpperCase()+infoCard.classe.slice(1);
    const tituloInfo= document.createElement("h4");
    tituloInfo.innerHTML= `[ ${infoCard.raça}/${classe} ]`;

    const pInfo= document.createElement("p");
    pInfo.innerHTML= info;

    infoBox.appendChild(tituloInfo);
    infoBox.appendChild(pInfo);

    const atributos= document.createElement("strong");
    atributos.innerHTML=`Vida${infoCard.vida} / Mana${infoCard.mana}`;
    infoBox.appendChild(atributos);

    contentCard.appendChild(infoBox);
    
    card.appendChild(contentCard);
    teste++;

    card.addEventListener("click",evt=>{
        evt.stopPropagation();
        limpar();
       card.classList.toggle("cardDestaque");
       card.classList.toggle("cardPequeno");
        

    })

    return card;

}
function limpar(){
    const destaque= document.querySelector(".cardDestaque");
    if(destaque!==null){
        destaque.classList.toggle("cardPequeno");
        destaque.classList.remove("cardDestaque");
    }
}

document.body.addEventListener("click",el=>{
    const destaque= document.querySelector(".cardDestaque");
    if(destaque!==null){
        destaque.classList.toggle("cardPequeno");
        destaque.classList.remove("cardDestaque");
    }
})